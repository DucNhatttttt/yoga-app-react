// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM9niGjcRIfUiAX4fThm6craq1eCi4zgo",
  authDomain: "yoga-class-app-8cc61.firebaseapp.com",
  databaseURL: "https://yoga-class-app-8cc61-default-rtdb.firebaseio.com",
  projectId: "yoga-class-app-8cc61",
  storageBucket: "yoga-class-app-8cc61.firebasestorage.app",
  messagingSenderId: "994687848440",
  appId: "1:994687848440:web:84196c842c5e85ae9bd00d",
  measurementId: "G-91SSZKV4S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };