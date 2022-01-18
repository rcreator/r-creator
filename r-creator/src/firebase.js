import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCVfRGnOTiLaNW1WF8vQDZjadSe6mHkG-I",
  authDomain: "r-creator.firebaseapp.com",
  projectId: "r-creator",
  storageBucket: "r-creator.appspot.com",
  messagingSenderId: "551530847097",
  appId: "1:551530847097:web:5f6dd07f2b25eec4666da8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const store = getStorage(app);

export { auth, provider, store };
export default db;
