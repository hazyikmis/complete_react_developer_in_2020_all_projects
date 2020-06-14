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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //console.log(userAuth.uid);
  //console.log(firestore.doc("users/9wCDriN2nOBvs4QGvUur"));
  //const userRef = firestore.doc("users/9wCDriN2nOBvs4QGvUur");  //userAuth.uid="9wCDriN2nOBvs4QGvUur" //snapshot.exists=true
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  //console.log(snapShot);

  if (!snapShot.exists) {
    //here we are inserting the google authenticated user into to the "user" collection
    //because this user does not exist in the user collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
