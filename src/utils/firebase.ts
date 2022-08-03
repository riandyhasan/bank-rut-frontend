import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVWZH7HwrUF7f0Qo-XuonoN_HiIayKWwM",
    authDomain: "bankrut-193c8.firebaseapp.com",
    projectId: "bankrut-193c8",
    storageBucket: "bankrut-193c8.appspot.com",
    messagingSenderId: "613762012596",
    appId: "1:613762012596:web:ee1cba25140f813f490ee1"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };