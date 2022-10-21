import React from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const firebaseConfig = {
  apiKey: "AIzaSyBtnM4ccCYlNgkay6vfRW6UboSZdqoSLio",
  authDomain: "chat-react-d2ab5.firebaseapp.com",
  projectId: "chat-react-d2ab5",
  storageBucket: "chat-react-d2ab5.appspot.com",
  messagingSenderId: "111888870969",
  appId: "1:111888870969:web:bb0217c694c8823560e7e8",
  measurementId: "G-65R8BJ0KNE"
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

