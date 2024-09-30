import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTw2m42yRP5CWlF0dvRvONo8D-WSQZV1g",
    authDomain: "netflix-website-clone-29528.firebaseapp.com",
    projectId: "netflix-website-clone-29528",
    storageBucket: "netflix-website-clone-29528.appspot.com",
    messagingSenderId: "374168634948",
    appId: "1:374168634948:web:e1890aae9c7d742e011e11",
    measurementId: "G-41W41BEY9P"
  };


  const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

  export {auth, db};