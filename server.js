const dotenv = require('dotenv');
const admin = require('firebase-admin');
const io = require('socket.io');
const createError = require('http-errors');
const { Board, Leds, Sensor } = require('johnny-five');
//const webduino = require('webduino-js');

dotenv.config({ path: `config.env` });
const app = require('./app');

//連接Firebase帳戶與資料庫
admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url:
      process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  }),
  databaseURL: `${process.env.databaseURL}`
});

const port = process.env.PORT || '3000';

const server = app.listen(port, function() {
  console.log('connected!');
});
const sio = io(server);
const board = new Board({
  port: 'COM4'
});

let numberOfCars = 0;

// johnny-five event when johnny init ready
board.on('ready', function() {
  sio.on('connection', function(socket) {
    const leds = new Leds([4, 3, 2]); // 指定LED output 為 Arduino 第4,3,2腳
    // Create a new `fsr` hardware instance.
    const fsr = new Sensor.Digital(12);
    fsr.on('change', () => {
      let time;
      // 值addTrafficSignalLightsSeconds為1代表有車子通過
      if (fsr.value === 1) {
        numberOfCars += 1;
        //fsr.addTrafficSignalLightsSeconds = 1;
        if (numberOfCars === 1) {
          fsr.addTrafficSignalLightsSeconds = 1; //10秒內有1輛車子通過值就為1
          socket.emit(
            'ForceSensitiveResistorEvent',
            fsr.addTrafficSignalLightsSeconds
          );
          console.log(fsr.addTrafficSignalLightsSeconds);
        } else if (numberOfCars >= 2) {
          fsr.addTrafficSignalLightsSeconds = 2; //10秒內有2輛車子通過值就為2
          socket.emit('ForceSensitiveResistorEvent', numberOfCars);
        } else {
          fsr.addTrafficSignalLightsSeconds = 0;
          socket.emit(
            'ForceSensitiveResistorEvent',
            fsr.addTrafficSignalLightsSeconds
          );
        }
        time = setTimeout(() => {
          //40秒後沒有任何車子經過就重置
          fsr.addTrafficSignalLightsSeconds = 0;
          socket.emit(
            'ForceSensitiveResistorEvent',
            fsr.addTrafficSignalLightsSeconds
          );
          numberOfCars = 0;
          clearTimeout(time);
        }, 40000);
      }
      //console.log(fsr.value);
    });

    // socket連線成功時，開始監聽前端的 ledOffEvent、ledOnEvent 事件
    //sio.on('connection', function(socket) {
    let time = null;
    socket.on('ledOffEvent', function(data) {
      console.log(data);
      leds.off();
      clearTimeout(time); //清除計時器(沒有清除的話他會只關閉完當下那顆亮的LED之後又繼續執行)
    });
    socket.on('ledOnEvent', function(data) {
      ledLoopOn();
      console.log(data);
      function ledAsync(i, duration) {
        return new Promise(res => {
          //Promise(ES6語法)
          time = setTimeout(() => {
            console.log(i);
            console.log(duration);
            leds[i].off();
            res(`${i}亮`); //await有接收到resolve()才會繼續往下一個await setPin()執行
          }, duration);
        });
      }
      async function setPin(i, duration) {
        //當函式前面寫上async，裡面就可以使用await的同步語法
        leds[i].on();
        await ledAsync(i, duration, data);
      }
      async function ledLoopOn() {
        //async搭配await(ES7語法=>不支援IE瀏覽器)
        while (true) {
          if (fsr.addTrafficSignalLightsSeconds === 1) {
            await setPin(0, 20000); //同步執行，會等待上一個LED執行完才繼續換下一個LED
            await setPin(1, 1500);
            await setPin(2, 20000);
            await setPin(1, 1500);
          } else if (fsr.addTrafficSignalLightsSeconds === 2) {
            await setPin(0, 40000); //同步執行，會等待上一個LED執行完才繼續換下一個LED
            await setPin(1, 1500);
            await setPin(2, 40000);
            await setPin(1, 1500);
          } else {
            await setPin(0, 10000); //同步執行，會等待上一個LED執行完才繼續換下一個LED
            await setPin(1, 1500);
            await setPin(2, 10000);
            await setPin(1, 1500);
          }
        }
      }
    });
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
