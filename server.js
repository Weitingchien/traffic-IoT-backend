const dotenv = require('dotenv');
const io = require('socket.io');
const { Board, Leds, Sensor } = require('johnny-five');

dotenv.config({ path: `config.env` });
const app = require('./app');

const port = '3000' || process.env.PORT;

const server = app.listen(port, () => {
  console.log('connected!');
});
const sio = io(server);
const board = new Board({
  port: 'COM4'
});

// johnny-five event when johnny init ready
board.on('ready', () => {
  sio.on('connection', socket => {
    let ledTimer;
    let numberOfCars = 0;
    const leds = new Leds([4, 3, 2, 7, 6, 5]); // 指定LED output 為 Arduino 第4,3,2,7,6,5腳
    // Create a new `fsr` hardware instance.
    const fsrA = new Sensor.Digital({
      pin: 12,
      freq: 25
    });
    const fsrB = new Sensor.Digital({
      pin: 13,
      freq: 25
    });
    fsrA.on('change', () => {
      let time;
      // 如果fsrA.value為1代表有車子通過
      if (fsrA.value === 1) {
        numberOfCars += 1;
        if (numberOfCars >= 1 && numberOfCars <= 3) {
          fsrA.addTrafficSignalLightsSeconds = 1; //1輛且小於等於3輛車子通過值就為1
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
        } else if (numberOfCars > 4) {
          fsrA.addTrafficSignalLightsSeconds = 2; //有4輛以上車子通過值就為2
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
        }
        time = setTimeout(() => {
          //90秒後沒有任何車子經過就重置
          fsrA.addTrafficSignalLightsSeconds = 0;
          numberOfCars = 0;
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
          clearTimeout(time);
        }, 90000);
      }
    });
    fsrB.on('change', () => {
      let time;
      if (fsrB.value === 1) {
        numberOfCars += 1;
        if (numberOfCars >= 1 && numberOfCars <= 3) {
          fsrB.addTrafficSignalLightsSeconds = 1;
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
        } else if (numberOfCars >= 4) {
          fsrB.addTrafficSignalLightsSeconds = 2;
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
        }
        time = setTimeout(() => {
          fsrB.addTrafficSignalLightsSeconds = 0;
          numberOfCars = 0;
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
          clearTimeout(time);
        }, 90000);
      }
    });
    // 接收前端發送的 ledOffEvent、ledOnEvent 事件
    socket.on('ledOffEvent', () => {
      leds.off();
      clearTimeout(ledTimer); //清除計時器(沒有清除的話他會只關閉完當下那顆亮的LED之後又繼續執行)
    });
    socket.on('ledOnEvent', () => {
      function ledAsync(a, b, duration) {
        return new Promise(resolve => {
          ledTimer = setTimeout(() => {
            leds[a].off();
            leds[b].off();
            resolve(`成功關閉${a}和${b}交通號誌燈`); //成功關閉當下的交通號誌燈時，回傳resolve()才會繼續往下一個await setPin()執行
          }, duration);
        });
      }
      async function setPin(a, b, duration) {
        //當函式前面寫上async，裡面就可以使用await的同步語法
        leds[a].on();
        leds[b].on();
        await ledAsync(a, b, duration).then(success => {
          console.log(success);
        });
      }
      async function ledLoopOn() {
        //async搭配await(ES7語法=>不支援IE瀏覽器)
        while (true) {
          if (
            fsrA.addTrafficSignalLightsSeconds === 1 ||
            fsrB.addTrafficSignalLightsSeconds === 1
          ) {
            await setPin(0, 5, 20000); //同步執行，會等待上一個LED執行完才繼續換下一個LED
            await setPin(1, 4, 1500);
            await setPin(2, 3, 20000);
            await setPin(1, 4, 1500);
          } else if (
            fsrA.addTrafficSignalLightsSeconds === 2 ||
            fsrB.addTrafficSignalLightsSeconds === 2
          ) {
            await setPin(0, 5, 30000);
            await setPin(1, 4, 1500);
            await setPin(2, 3, 30000);
            await setPin(1, 4, 1500);
          } else {
            await setPin(0, 5, 10000);
            await setPin(1, 4, 1500);
            await setPin(2, 3, 10000);
            await setPin(1, 4, 1500);
          }
        }
      }
      ledLoopOn();
    });
  });
});
