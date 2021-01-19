const io = require('socket.io');
const express = require('express');
const createError = require('http-errors');
const { Board, Leds } = require('johnny-five');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const history = require('connect-history-api-fallback');//重整瀏覽器時，避免產生404的問題

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');


const app = express();

const server = app.listen(3000, function() {
  console.log('connected!');
});
const sio = io(server);
const board = new Board({
  port: 'COM4',
});
app.use(history());//單頁面應用的History路由模式

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// johnny-five event when johnny init ready
board.on('ready', function() {
  // 指定LED output 為 Arduino 第6,5,3腳
  const leds = new Leds([6,5,3]);
  // led init
  //leds.off();
  // socket連線成功時，開始偵聽前端的 redLightt 事件
  sio.on('connection', function(socket) {
    socket.on('ledLight', function(data) {
      //如果前端有動作則呼叫 johnny-five led.on() 切換led狀態
      console.log(data);
      if (data) {
/*           const rLed = leds[0].on();
          const yLed = leds[1].on();
          const gLed = leds[2].on();
          triggerAllLed(rLed, yLed, gLed); */
          leds[0].on();
          if(leds[0]){
              setTimeout(() => {
                  leds[0].off();
                  leds[1].on();
                  if(leds[1]){
                      setTimeout(() => {
                        leds[1].off();
                        leds[2].on();
                        if(leds[2]){
                            setTimeout(() => {
                                leds[2].off();
                            },500)
                            data = false;
                        }
                      },500)
                  }
              },500)
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

module.exports = app;
