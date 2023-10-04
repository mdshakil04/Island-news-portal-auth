// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEcofAFDOJm4I12CaVblm9wG_tlSev2j8",
  authDomain: "island-news-portal-auth.firebaseapp.com",
  projectId: "island-news-portal-auth",
  storageBucket: "island-news-portal-auth.appspot.com",
  messagingSenderId: "1090554544763",
  appId: "1:1090554544763:web:39411800f6b784efd918de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;