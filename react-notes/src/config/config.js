import firebase from "firebase";
const DB_CONFIG = {
  apiKey: "AIzaSyDPzKjvQFAl0y1BFJySzJ53ITuFEJRsUdA",
  authDomain: "react-notes-d10e3.firebaseapp.com",
  databaseURL: "https://react-notes-d10e3.firebaseio.com",
  projectId: "react-notes-d10e3",
  storageBucket: "react-notes-d10e3.appspot.com",
  messagingSenderId: "682259311692"
};
const fire = firebase.initializeApp(DB_CONFIG);
export default fire;
