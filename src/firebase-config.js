import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// require('dotenv').config();

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_APIKEY,
    // authDomain: process.env.REACT_APP_AUTHDOMAIN,
    // projectId: process.env.REACT_APP_PROJECTID,
    // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    // appId: process.env.REACT_APP_APPID,
    // measurementId: process.env.REACT_APP_MEASUREMENTID

    apiKey: "AIzaSyC_6y2Zv9yX0NGLUQdQ3BhjYWuTW8XbNnw",
    authDomain: "restaurant-api-55771.firebaseapp.com",
    projectId: "restaurant-api-55771",
    storageBucket: "restaurant-api-55771.appspot.com",
    messagingSenderId: "771955812844",
    appId: "1:771955812844:web:7e6430e6e2084ac326f8c9",
    measurementId: "G-VDCV3Q5YET"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 