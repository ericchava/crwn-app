import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAkjtFnSJkHD_UFmHFTfKFp_WVRaPw9oZ8",
  authDomain: "crown-da.firebaseapp.com",
  projectId: "crown-da",
  storageBucket: "crown-da.appspot.com",
  messagingSenderId: "1046098786802",
  appId: "1:1046098786802:web:88cb100f7110fe5543d36b",
  measurementId: "G-81QM4PZNDL",
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
