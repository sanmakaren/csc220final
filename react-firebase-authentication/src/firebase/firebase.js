import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyC-P6nTKJjpUPSV1urC-Fl850XT_VEfwK4",
    authDomain: "lets-talk-final.firebaseapp.com",
    databaseURL: "https://lets-talk-final.firebaseio.com",
    projectId: "lets-talk-final",
    storageBucket: "",
    messagingSenderId: "419962268924"
};

const devConfig = {
  apiKey: "AIzaSyBAWgV8uJ954W1CIgzMJCgv6NtxBWgmuno",
    authDomain: "letstalk-605b7.firebaseapp.com",
    databaseURL: "https://letstalk-605b7.firebaseio.com",
    projectId: "letstalk-605b7",
    storageBucket: "letstalk-605b7.appspot.com",
    messagingSenderId: "857710531210"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
