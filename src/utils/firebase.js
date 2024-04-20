// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiqmJHo6dln2p_zG19V46JPOA0yBhkTrU",
  authDomain: "med-care-afc21.firebaseapp.com",
  projectId: "med-care-afc21",
  storageBucket: "med-care-afc21.appspot.com",
  messagingSenderId: "153980717968",
  appId: "1:153980717968:web:ea4a1ece9f6080cc434115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app);