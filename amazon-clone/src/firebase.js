// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBv78OlMow4mBAnawtEqaDFsL5V7ZOKoTM",
    authDomain: "clone-e1a39.firebaseapp.com",
    projectId: "clone-e1a39",
    storageBucket: "clone-e1a39.appspot.com",
    messagingSenderId: "116404370397",  
    appId: "1:116404370397:web:112405d8f46f68b51f5434",
    measurementId: "G-ZQQLVX2LKC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
 
export { db, auth };