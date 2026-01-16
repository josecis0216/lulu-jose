import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'clarissa-carlos.firebaseapp.com',
    databaseURL: process.env.DATABASE_URL,
    projectId: 'clarissa-carlos',
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }


// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/database";

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_KEY,
//     authDomain: "clarissa-carlos.firebaseapp.com",
//     databaseURL: process.env.DATABASE_URL,
//     projectId: "clarissa-carlos",
//     storageBucket: "clarissa-carlos.firebasestorage.app",
//     messagingSenderId: "346512949428",
//     appId: "1:346512949428:web:d12af6d6931daea160d7e1"
// };

// // ✅ Only initialize if no apps exist
// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const db = firebase.database();

// // 🔥 Anonymous auth bootstrap
// auth.onAuthStateChanged(user => {
//     if (!user) {
//         auth.signInAnonymously();
//     }
// });
