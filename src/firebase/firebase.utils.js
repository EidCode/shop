import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXRoyqWw2rBIfFpdGZd8k6w48PH_CYQvg",
  authDomain: "crwn-db-5cbfa.firebaseapp.com",
  databaseURL: "https://crwn-db-5cbfa.firebaseio.com",
  projectId: "crwn-db-5cbfa",
  storageBucket: "crwn-db-5cbfa.appspot.com",
  messagingSenderId: "364994075585",
  appId: "1:364994075585:web:04c48eec60d8cb98d7ad40",
  measurementId: "G-QVHCLZXZHY"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error catching user: ", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
