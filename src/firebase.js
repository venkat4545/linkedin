import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC4kypxL7pFKU5yyol2JyhBsiiev_lvB3o",
    authDomain: "nasusa-5f54f.firebaseapp.com",
    projectId: "nasusa-5f54f",
    storageBucket: "nasusa-5f54f.appspot.com",
    messagingSenderId: "878248696000",
    appId: "1:878248696000:web:d61de6924cb2d38fb9b525"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export  {db, auth};