// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'real-estate-f03ce.firebaseapp.com',
  projectId: 'real-estate-f03ce',
  storageBucket: 'real-estate-f03ce.appspot.com',
  messagingSenderId: '179916942637',
  appId: '1:179916942637:web:f01c8447957538a42ff7a4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
