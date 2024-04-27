// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// googleAuthProvider , getAuth, signInWithPopup, signOut, onAuthStateChanged
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = "en";
const provider = new GoogleAuthProvider();
const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // set item to localstorage 
      localStorage.setItem("userGoogle", JSON.stringify(user));
     window.location.href = "/";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
const LogoutFct = () => {
  signOut(auth)
    .then(() => {
      localStorage.removeItem("userGoogle");
      localStorage.removeItem("userMail");

      window.location.href = "/";
    })
    .catch((error) => {
      // An error happened.
    });
};
const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    localStorage.setItem("userMail", JSON.stringify(user));

    return user;
  } catch (error) {
    console.error("Error signing in with email/password:", error);
    throw error;
  }
};



export { signGoogle, auth, onAuthStateChanged,LogoutFct ,signInWithEmail};
