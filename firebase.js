import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1jpQ_LkUX1v75i1iS9zLrAc5jSB6kux8",
    authDomain: "clone-ac0f2.firebaseapp.com",
    databaseURL: "https://clone-ac0f2.firebaseio.com",
    projectId: "clone-ac0f2",
    storageBucket: "clone-ac0f2.appspot.com",
    messagingSenderId: "592030350796",
    appId: "1:592030350796:web:11fe604b9dae45163ff169"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };