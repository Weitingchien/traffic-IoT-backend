const firebase = require('../service/firebase_connect'); //載入認證模組
const firebaseDB = require('../service/firebase_adminConnect');
//載入資料庫模組
const fireAuth = firebase.auth();

exports.check = function(req, res, next) {
  if (req.session.uid) {
    res.status(200).json({
      status: 'success',
      success: true
    });
  }
};

exports.login = function(req, res) {
  const { email, pwd } = req.body;
  fireAuth
    .signInWithEmailAndPassword(email, pwd)
    .then(userObject => {
      req.session.uid = userObject.user.uid;
      res.status(200).json({
        status: 'success',
        success: true,
        auth: req.session.uid
      });
    })
    .catch(err => {
      res.status(401).json({
        status: 'error',
        message: err
      });
    });
};

exports.signup = (req, res) => {
  const { name, email, pwd } = req.body;
  fireAuth
    .createUserWithEmailAndPassword(email, pwd)
    .then(userObject => {
      const userInfo = {
        uid: userObject.user.uid,
        name: name,
        email: email
      };
      firebaseDB.ref(`/user/${userObject.user.uid}`).set(userInfo);
      res.status(201).json({
        status: 'success',
        success: true
      });
      res.redirect('/Login');
    })
    .catch(err => {
      console.log(err);
      //req.flash('error', err.message);
      //res.renderVue('Signup.vue', { error: req.flash('error') } );
      //res.redirect('/Signup');
    });
};
