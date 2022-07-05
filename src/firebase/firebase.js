// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1jLPKciBu9bbsikdQJbnjWBCxUCT4F08",
  authDomain: "web-netflix-eb911.firebaseapp.com",
  projectId: "web-netflix-eb911",
  storageBucket: "web-netflix-eb911.appspot.com",
  messagingSenderId: "1039424447199",
  appId: "1:1039424447199:web:63b375a110ebde90f33f6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)