// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd_g2HZ-KbFrfUB55dThFmHjGuZozdw6g",
  authDomain: "yoga-expert.firebaseapp.com",
  projectId: "yoga-expert",
  storageBucket: "yoga-expert.appspot.com",
  messagingSenderId: "757517234151",
  appId: "1:757517234151:web:4474daaa5ab4d0dda29742",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
