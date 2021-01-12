import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQKyG1n8QMhDL-2fBeeRqd9Hf_ltWKK_g",
  authDomain: "client-panel-95cf5.firebaseapp.com",
  projectId: "client-panel-95cf5",
  storageBucket: "client-panel-95cf5.appspot.com",
  messagingSenderId: "825356755300",
  appId: "1:825356755300:web:b47d5194d820bc67749a71",
  measurementId: "G-HKXM8F0LRX",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();


export default firebase;