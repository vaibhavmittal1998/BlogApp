import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBMMZG00OpDUJYX3Ak0Cp0J2PguqIPuFg",
    authDomain: "blogapp-bb549.firebaseapp.com",
    projectId: "blogapp-bb549",
    storageBucket: "blogapp-bb549.appspot.com",
    messagingSenderId: "759357953347",
    appId: "1:759357953347:web:1ae0247d5845c952e28bf6",
    measurementId: "G-5T7H12T89K"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// use to open google popup to select an account 
const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 


export default firebase;