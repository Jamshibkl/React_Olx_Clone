import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import "firebase/compat/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqffGe0elYmJjpWGkSmo8nrVllQ-_B7ho",
  authDomain: "fir-776b5.firebaseapp.com",
  projectId: "fir-776b5",
  storageBucket: "fir-776b5.appspot.com",
  messagingSenderId: "686955387234",
  appId: "1:686955387234:web:f437422ec6f9e5056cb43b",
  measurementId: "G-G379TX8CE5"
};


  export default firebase.initializeApp(firebaseConfig);