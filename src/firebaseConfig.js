import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDRusFhR0SQPepf_AvPBjfYlN0qw9_SVSY",
  authDomain: "picnich-badad.firebaseapp.com",
  projectId: "picnich-badad",
  storageBucket: "picnich-badad.appspot.com",
  messagingSenderId: "329735352856",
  appId: "1:329735352856:web:8849e551e68ed9f9ec496d",
  measurementId: "G-J1KCY3N0DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
