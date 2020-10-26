import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDu18ImAdaZggZNBDwhLP8qI5fK8KMXW2E",
  authDomain: "sending-email-task.firebaseapp.com",
  databaseURL: "https://sending-email-task.firebaseio.com",
  projectId: "sending-email-task",
  storageBucket: "sending-email-task.appspot.com",
  messagingSenderId: "37936632689",
  appId: "1:37936632689:web:3b93990a8ff27437511cd0",
  measurementId: "G-TEREYY6CT2"
};
firebase.initializeApp(config);
export const functions = firebase.functions();