import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { FIREBASE_APIKEY } from "../.env.js";

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: "king-clothing-db-421f1.firebaseapp.com",
  databaseURL: "https://king-clothing-db-421f1.firebaseio.com",
  projectId: "king-clothing-db-421f1",
  storageBucket: "king-clothing-db-421f1.appspot.com",
  messagingSenderId: "128440006845",
  appId: "1:128440006845:web:485560bdd5f9678e16dfd4",
  measurementId: "G-F9N3PG8F4B",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
