import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCch9gd2cRyxVjR88plzMJMP2ETJfKHtrI",
  authDomain: "clone-fb5f9.firebaseapp.com",
  projectId: "clone-fb5f9",
  storageBucket: "clone-fb5f9.appspot.com",
  messagingSenderId: "739312507692",
  appId: "1:739312507692:web:d89aae07a6d46425146a89",
  measurementId: "G-C49DLLM17S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
