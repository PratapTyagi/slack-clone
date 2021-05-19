import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBa4tatBvEniHtllKc4jAGN6Zc0ZXuTJTQ",
  authDomain: "slack-clone-b5a73.firebaseapp.com",
  projectId: "slack-clone-b5a73",
  storageBucket: "slack-clone-b5a73.appspot.com",
  messagingSenderId: "1032153639050",
  appId: "1:1032153639050:web:76a41d7dc2e5a76f412573",
  measurementId: "G-H7R6YQDG5G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
