import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIcCU-7nEcXUcF_bhmOb5cUUwLDsBpjFU",
    authDomain: "local-worker-1b9bb.firebaseapp.com",
    projectId: "local-worker-1b9bb",
    storageBucket: "local-worker-1b9bb.appspot.com",
    messagingSenderId: "802054787200",
    appId: "1:802054787200:web:17aa12209e74124fccd665",
    measurementId: "G-TMXQT0JYB0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
