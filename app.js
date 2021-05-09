const express = require('express');
const morgan = require('morgan'); //請求紀錄器(日誌)
const history = require('connect-history-api-fallback'); //重整瀏覽器時，避免產生404的問題
const session = require('express-session');
const trafficRouter = require('./routes/trafficRouter');

const app = express();
console.log(app.get('env'));

// middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(
  session({
    //session對使用者發號碼牌，並對其內容加密
    secret: 'keyboard cat', //加密
    resave: false, //是否要每次進入網頁時重新設置seesion cookie，例如值為true時，設定10分鐘到期，重新整理後又有10分鐘
    saveUninitialized: true, //值為true時，每次請求都會有一個sessionID(Name:connect.sid)的東西在Cookies
    cookie: { maxAge: 600 * 1000 } //10分鐘後到期
  })
);

app.use(history()); //單頁面應用的History路由模式
app.use(express.json()); //把資料轉成JSON Object
app.use(express.static(`${__dirname}/dist`)); //靜態檔案 絕對路徑://D:\lhuProject\origin-backend\traffic-IoT-backend/dist

// route

app.use('/api/v1/traffic', trafficRouter);

module.exports = app;
