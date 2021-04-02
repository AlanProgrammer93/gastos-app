import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDVAwtxcIIZkkXGZJYLYjNCdmswXaQmzXQ",
    authDomain: "lista-gastos-df159.firebaseapp.com",
    projectId: "lista-gastos-df159",
    storageBucket: "lista-gastos-df159.appspot.com",
    messagingSenderId: "1013217225461",
    appId: "1:1013217225461:web:260d3727916079712ef3bc"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


export {db, auth};
