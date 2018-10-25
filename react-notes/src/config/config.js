import firebase from "firebase";
const DB_CONFIG = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
const fire = firebase.initializeApp(DB_CONFIG);
export default fire;
