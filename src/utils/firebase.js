// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWZH7HwrUF7f0Qo-XuonoN_HiIayKWwM",
  authDomain: "bankrut-193c8.firebaseapp.com",
  projectId: "bankrut-193c8",
  storageBucket: "bankrut-193c8.appspot.com",
  messagingSenderId: "613762012596",
  appId: "1:613762012596:web:ee1cba25140f813f490ee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };