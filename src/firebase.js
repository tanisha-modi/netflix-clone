// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD5qxAeoa8nLCGXWPGR2keLwwpjDCh18CM",
    authDomain: "netflix-clone-1b1eb.firebaseapp.com",
    projectId: "netflix-clone-1b1eb",
    storageBucket: "netflix-clone-1b1eb.appspot.com",
    messagingSenderId: "817709096178",
    appId: "1:817709096178:web:3ac75b20e3d9792503c46b",
    measurementId: "G-EFKSTV4T58"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;