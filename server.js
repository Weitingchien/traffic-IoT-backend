require('dotenv').config()
const path = require("path");
const cors = require('cors');
const io = require("socket.io");
const logger = require("morgan");
const express = require("express");
const admin = require("firebase-admin");
const serveStatic = require('serve-static');
const createError = require("http-errors");
const session = require("express-session");
const MemoryStore = require('memorystore')(session)
//const cookieParser = require("cookie-parser");
const { Board, Leds } = require("johnny-five");
const history = require("connect-history-api-fallback");//重整瀏覽器時，避免產生404的問題
const { setInterval, clearInterval, setTimeout } = require("timers");
//const serviceAccount = require("./test01-4f7aa-firebase-adminsdk-zu5f7-dfb6edf5a2.json");
const app = express();
//app.use(cookieParser());
app.use(session({//session對使用者發號碼牌，並對其內容加密
  secret: 'keyboard cat',//加密
  resave: false,
  saveUninitialized: true,
  cookie: {
     httpOnly: true,
     maxAge: 600000
  },//10分鐘
  store: new MemoryStore({
    checkPeriod: 600000
  }),
}))

// 加上 credentials 後，origin 必須設置網址，不能為 * (通用)
const corsOptions = {//因為非同源，所以前後端都必須要加上CORS的Credentials:true
  origin: `http://localhost:8080` || `${process.env.SocketIO}`, // 客戶端 port
  credentials: true,
};

app.use(cors(corsOptions)); // 要在 API 的上面先使用

//連接Firebase帳戶與資料庫
admin.initializeApp({
  credential: admin.credential.cert({
    "type": process.env.FIREBASE_TYPE,
    "project_id": process.env.FIREBASE_PROJECT_ID,
    "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
    "private_key": process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    "client_email": process.env.FIREBASE_CLIENT_EMAIL,
    "client_id": process.env.FIREBASE_CLIENT_ID,
    "auth_uri": process.env.FIREBASE_AUTH_URI,
    "token_uri": process.env.FIREBASE_TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
  }),
  databaseURL: `${process.env.databaseURL}`
});

const fireData = admin.database();
const PORT = process.env.PORT || '3000';


const server = app.listen(PORT, function() {
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'dist')));//靜態檔案
app.use(express.static(path.join(__dirname, '/dist')));//靜態檔案
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


app.post('/Login', function(req, res){
  //req.session.user = req.body.email;
  fireData.ref('administrator').once('value', function(snapshot){
    let administratorEmail = snapshot.val().email;//取得firebase管理員email的值
    let administratorpwd = snapshot.val().pwd;
    if (req.body.email === administratorEmail && req.body.pwd === administratorpwd ){//如果使用者輸入的email與密碼與firebase資料庫裡面的資料一樣
      res.send({//回傳token=>經過session加密，還有result=>值是一個物件裡面有email與pwd
        token: req.session.user,
        result: snapshot.val(),
        success: true
      })
    }
  });
/*   res.send({
    token: req.session.user,
  }) */
})

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// johnny-five event when johnny init ready
board.on('ready', function() {

  const leds = new Leds([6,5,3]);  // 指定LED output 為 Arduino 第6,5,3腳
  // socket連線成功時，開始監聽前端的 ledOffEvent、ledOnEvent 事件
  sio.on('connection', function(socket) {
    let time = null;
    socket.on('ledOffEvent', function(data){
      console.log(data);
      leds.off();
      clearTimeout(time);//清除計時器(沒有清除的話他會只關閉完當下那顆亮的LED之後又繼續執行)
    });
    socket.on('ledOnEvent', function(data) {
      ledLoopOn(data);
      console.log(data);
        function ledAsync (i,duration){
          return new Promise((res) => {//Promise(ES6語法)
             time = setTimeout(()=>{
                console.log(i);
                leds[i].off();
                res(`${i}亮`);//await有接收到resolve()才會繼續往下一個await setPin()執行
            } ,duration)
          });
        }
        async function setPin(i,duration){//當函式前面寫上async，裡面就可以使用await的同步語法
          leds[i].on();
          await ledAsync(i,duration,data);
        }
        async function ledLoopOn(data){//async搭配await(ES7語法=>不支援IE瀏覽器)
            while(true){
              await setPin(0,10000);//同步執行，會等待上一個LED執行完才繼續換下一個LED
              await setPin(1,1500);
              await setPin(2,10000);
              await setPin(1,1500);
            }
          }
        });
      });
    });
/*         function ledLoopOn(data){
          if(!data){//callback hell(回呼地獄=>不易閱讀，擴充性不佳，要一直寫重複的片段)
            return;
          }else{
          leds[0].on();
          if(leds[0] && data){
            let timeoutA = setTimeout(() => {
              leds[0].off();
              leds[1].on();
              if(leds[1] && data){
                let timeoutB = setTimeout(() => {
                  leds[1].off();
                  leds[2].on();
                  if(leds[2] && data){
                    let timeoutC = setTimeout(() => {
                      leds[2].off();
                      clearTimeout(timeoutA,timeoutB,timeoutC);
                      ledLoopOn(data);
                    },10000)
                  }
                },1500)
              }
            },10000)
          }
        }
      } */




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
