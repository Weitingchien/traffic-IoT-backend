const firebase = require('../service/firebase_connect');
const firebaseDB = require('../service/firebase_adminConnect');

const fireAuth = firebase.auth(); // auth提供一些驗證的方法

exports.check = (req, res) => {
  if (req.session.uid === process.env.admin_UID) {
    res.status(200).json({
      status: 'success',
      success: true,
      role: 'admin'
    });
  } else if (req.session.uid !== process.env.admin_UID) {
    res.status(200).json({
      status: 'success',
      success: true,
      role: 'user'
    });
  } else {
    res.status(401).json({
      status: 'error',
      success: false
    });
  }
};

exports.login = (req, res) => {
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
    })
    .catch(err => {
      console.log(err);
    });
};
