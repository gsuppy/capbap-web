import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPKBdzAndZMYAqUXS8mVUXxhtYEiuiAfo",
  authDomain: "capbap-web.firebaseapp.com",
  projectId: "capbap-web",
  storageBucket: "capbap-web.appspot.com",
  messagingSenderId: "686699152399",
  appId: "1:686699152399:web:bc84d8fb34633807920f7a",
  measurementId: "G-JF4Q91091Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "/home",
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};

function Authentication() {
  return (
    <div>
      <h3>Please Sign In to Access Member Pages</h3>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
  );
}

export { Authentication, firebaseApp}; 