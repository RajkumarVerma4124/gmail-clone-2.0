import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC3SE6DrGE-Bg0m9ZZCM_rN-r-dSo6ZWy8",
    authDomain: "clone-rv-3c63f.firebaseapp.com",
    projectId: "clone-rv-3c63f",
    storageBucket: "clone-rv-3c63f.appspot.com",
    messagingSenderId: "31964919849",
    appId: "1:31964919849:web:f8a792a635504ae4374438",
    measurementId: "G-JMWGZXYMBN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };