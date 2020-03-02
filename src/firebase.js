import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDA-TdgCNty--kJkZltvPclyBFD1_xsH1k",
    authDomain: "edge-portal-e9a85.firebaseapp.com",
    databaseURL: "https://edge-portal-e9a85.firebaseio.com",
    projectId: "edge-portal-e9a85",
    storageBucket: "edge-portal-e9a85.appspot.com",
    messagingSenderId: "925860328660",
    appId: "1:925860328660:web:35286277b217b79c16f741",
    measurementId: "G-7TQ9TDQV4Q"
  };
  // Initialize Firebase
  export const firebaseDb = firebase.initializeApp(firebaseConfig);
  const db = firebaseDb.firestore();
   export default db;
   