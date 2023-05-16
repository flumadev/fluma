import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAx6XiOBAaDuV6GpHHr-6j2OXWoD4XDlL8",
    authDomain: "flumaweb.firebaseapp.com",
    projectId: "flumaweb",
    storageBucket: "flumaweb.appspot.com",
    messagingSenderId: "246432717455",
    appId: "1:246432717455:web:ca0cee2ad08ab69689aefa",
    measurementId: "G-QDGMK4BSGH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  let db = getFirestore(app);

  export {
    db
  }