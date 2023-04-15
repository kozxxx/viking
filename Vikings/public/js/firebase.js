// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUNjShFyzz-9CEXsgYBBNXW_sartOKljQ",
  authDomain: "viking-abcc5.firebaseapp.com",
  databaseURL: "https://viking-abcc5-default-rtdb.firebaseio.com",
  projectId: "viking-abcc5",
  storageBucket: "viking-abcc5.appspot.com",
  messagingSenderId: "726287868540",
  appId: "1:726287868540:web:93b0936fcd6b0336f79ff9",
  measurementId: "G-3N2RRXGXYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);