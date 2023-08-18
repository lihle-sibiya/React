import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBCEd9wotwVrIC4zlTv-xxlgGLuzbjsmF4",
  authDomain: "chapter-9-759bf.firebaseapp.com",
  projectId: "chapter-9-759bf",
  storageBucket: "chapter-9-759bf.appspot.com",
  messagingSenderId: "489587740268",
  appId: "1:489587740268:web:d480cf080aab2970595249",
  measurementId: "G-6BS3RHSHMW"
 };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

