import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj2dwRuHLpLDLSpo5bRVfTqw1QffuP-Js",
  authDomain: "pantry-tracker-16094.firebaseapp.com",
  projectId: "pantry-tracker-16094",
  storageBucket: "pantry-tracker-16094.appspot.com",
  messagingSenderId: "387671629665",
  appId: "1:387671629665:web:1135a2b88385bc8a456f20",
  measurementId: "G-TDMEPSV7PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore (app);

export {firestore}

