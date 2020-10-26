import firebase from "firebase";

const config = {
  apiKey: "AIzaSyA2eKx5yHZZhycKc6WsOpZkCkT_RH1SdGU",
  authDomain: "kot-profile-267.firebaseapp.com",
  databaseURL: "https://kot-profile-267.firebaseio.com",
  projectId: "kot-profile-267",
  storageBucket: "kot-profile-267.appspot.com",
  messagingSenderId: "842253242502",
  appId: "1:842253242502:web:4f5f0b5d5cb9fde59e0107",
};
firebase.initializeApp(config);
export const functions = firebase.functions();