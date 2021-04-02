const firebase = require('firebase');

const firebaseConfig = {
  apiKey: 'AIzaSyCzZUIvwbU6DEFHCxmUuE3dRYMEutbt53s',
  authDomain: 'test01-4f7aa.firebaseapp.com',
  databaseURL: 'https://test01-4f7aa-default-rtdb.firebaseio.com',
  projectId: 'test01-4f7aa',
  storageBucket: 'test01-4f7aa.appspot.com',
  messagingSenderId: '855113425564',
  appId: '1:855113425564:web:46476dd1b87ce71c4a8359',
  measurementId: 'G-4K1EBM3F8E'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

module.exports = firebase;
