const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const history = require('connect-history-api-fallback'); //重整瀏覽器時，避免產生404的問題
const session = require('express-session');
const trafficRouter = require('./routes/trafficRouter');

const app = express();
console.log(app.get('env'));

// middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/', function(req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
});

// 加上 credentials 後，origin 必須設置網址，不能為 * (通用)
const corsOptions = {
  //因為非同源，所以前後端都必須要加上CORS的Credentials:true
  origin: `http://localhost:3000` || `${process.env.SocketIO}`, // 客戶端 port
  credentials: true
};

app.use(
  session({
    //session對使用這發號碼牌，並對其內容加密
    secret: 'keyboard cat', //加密
    resave: true, // 是否要每次進入網頁時重新設置 seesion cookie，如果有設置失效，例如 5 分鐘，重新整理後又有 5 分鐘，但是必須要改成 ture 才有效，但是建議改成 tru
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 5000
    } //10分鐘
  })
);
app.use(cors(corsOptions)); // 要在 API 的上面先使用
app.use(history()); //單頁面應用的History路由模式
app.use(express.json()); //透過req.body正確取得POST帶過來的參數
app.use(express.static(`${__dirname}/dist`)); //靜態檔案

// route

app.use('/api/v1/traffic', trafficRouter);

module.exports = app;
