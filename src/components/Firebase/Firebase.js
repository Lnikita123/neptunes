// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCs-1K6Ylk03ZZcDKncXliqjHi5Xq5LHO0",
//     authDomain: "neptunes-429309.firebaseapp.com",
//     projectId: "neptunes-429309",
//     storageBucket: "neptunes-429309.appspot.com",
//     messagingSenderId: "336264573435",
//     appId: "1:336264573435:web:8f515bd1348a0422115b5e",
//     measurementId: "G-Z8N82G1FRL"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth();
// export const db = getFirestore(app);
// export default app;

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs-1K6Ylk03ZZcDKncXliqjHi5Xq5LHO0",
    authDomain: "neptunes-429309.firebaseapp.com",
    projectId: "neptunes-429309",
    storageBucket: "neptunes-429309.appspot.com",
    messagingSenderId: "336264573435",
    appId: "1:336264573435:web:8f515bd1348a0422115b5e",
    measurementId: "G-Z8N82G1FRL"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('User info:', user);
        return user;
    } catch (error) {
        console.error('Error during sign-in:', error);
    }
};

export { auth, db, signInWithGoogle };
