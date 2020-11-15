import firebase from 'firebase';

const firebaseConfig = {
    //Paste your config file here...
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };
