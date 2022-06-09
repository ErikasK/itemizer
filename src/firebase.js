import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBguRCa6_q7niokNfdj3NvKB8Oxd4SJe_A",
    authDomain: "itemizer-27094.firebaseapp.com",
    databaseURL:
        "https://itemizer-27094-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "itemizer-27094",
    storageBucket: "itemizer-27094.appspot.com",
    messagingSenderId: "916333093996",
    appId: "1:916333093996:web:10683349600241f2976449",
    measurementId: "G-EV6KRVKJP4",
};

// Initialize Firebase
const app = initializeApp(config);
const db = getDatabase(app);

export { db };
