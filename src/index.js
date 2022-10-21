import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
firebase.initializeApp( {
  apiKey: "AIzaSyBtnM4ccCYlNgkay6vfRW6UboSZdqoSLio",
  authDomain: "chat-react-d2ab5.firebaseapp.com",
  projectId: "chat-react-d2ab5",
  storageBucket: "chat-react-d2ab5.appspot.com",
  messagingSenderId: "111888870969",
  appId: "1:111888870969:web:bb0217c694c8823560e7e8",
  measurementId: "G-65R8BJ0KNE"
})

 const auth= firebase.auth()
 const firestore=firebase.firestore()  
export const Context = createContext(null)

root.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
 <App />
  </Context.Provider>
   
  
);

