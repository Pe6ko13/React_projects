import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ_SmLBd540ZTN-WCDvNzNLkqkOPdOSAM",

  authDomain: "react-my-peds.firebaseapp.com",

  projectId: "react-my-peds",

  storageBucket: "react-my-peds.appspot.com",

  messagingSenderId: "753958999910",

  appId: "1:753958999910:web:2e19c678c828b073af1aa7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("logged in");
  } else {
    console.log("i'm out");
  }
});

export default firebase;
export const auth = firebase.auth();
