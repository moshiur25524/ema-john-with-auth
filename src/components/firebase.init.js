// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0WqUYHbR5BkL0DcP8dvwNjNiTLSroXQk",
  authDomain: "ema-john-simple-21d7a.firebaseapp.com",
  projectId: "ema-john-simple-21d7a",
  storageBucket: "ema-john-simple-21d7a.appspot.com",
  messagingSenderId: "842177366238",
  appId: "1:842177366238:web:7a38f50b3d1417b4635a4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;