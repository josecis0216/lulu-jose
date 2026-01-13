import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCDk6Pz_EACAo8JrE7ztrJRx2m8_WTP4mA",
    authDomain: "clarissa-carlos.firebaseapp.com",
    databaseURL: "https://clarissa-carlos-default-rtdb.firebaseio.com",
    projectId: "clarissa-carlos",
    storageBucket: "clarissa-carlos.firebasestorage.app",
    messagingSenderId: "346512949428",
    appId: "1:346512949428:web:d12af6d6931daea160d7e1"
};

// ✅ Only initialize if no apps exist
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.database();

// 🔥 Anonymous auth bootstrap
auth.onAuthStateChanged(user => {
    if (!user) {
        auth.signInAnonymously();
    }
});



// import { initializeApp } from "firebase/app";
// import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCDk6Pz_EACAo8JrE7ztrJRx2m8_WTP4mA",
//     authDomain: "clarissa-carlos.firebaseapp.com",
//     databaseURL: "https://clarissa-carlos-default-rtdb.firebaseio.com",
//     projectId: "clarissa-carlos",
//     storageBucket: "clarissa-carlos.firebasestorage.app",
//     messagingSenderId: "346512949428",
//     appId: "1:346512949428:web:d12af6d6931daea160d7e1"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export const authReady = new Promise((resolve) => {
//     onAuthStateChanged(auth, async (user) => {
//         if (!user) {
//             await signInAnonymously(auth);
//         }
//         resolve(auth);
//     });
// });

// export { auth };
