const admin = require('firebase-admin');

exports.login = function(req, res) {
  const fireData = admin.database();
  fireData.ref('administrator').once('value', function(snapshot) {
    const administratorEmail = snapshot.val().email; //取得firebase管理員email的值
    const administratorpwd = snapshot.val().pwd;
    if (
      req.body.email === administratorEmail &&
      req.body.pwd === administratorpwd
    ) {
      req.session.user = req.body.email;
      //如果使用者輸入的email與密碼與firebase資料庫裡面的資料一樣
      res.status(200).json({
        //回傳token=>經過session加密，還有result=>值是一個物件裡面有email與pwd
        token: req.session.user,
        result: snapshot.val(),
        success: true
      });
    }
  });
};
