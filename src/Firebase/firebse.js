// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGdHutE-18kuBioyc9XePJjS0a2iQSzzw",
    authDomain: "luxenest-hotel.firebaseapp.com",
    projectId: "luxenest-hotel",
    storageBucket: "luxenest-hotel.appspot.com",
    messagingSenderId: "590037401883",
    appId: "1:590037401883:web:72a7a3bcf88b70af7ed3be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth
