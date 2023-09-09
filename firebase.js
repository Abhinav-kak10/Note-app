import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDydlLKwZ9e97GzqAwCCKsGn_Lqry-LAtM",
  authDomain: "react-note-ead6f.firebaseapp.com",
  projectId: "react-note-ead6f",
  storageBucket: "react-note-ead6f.appspot.com",
  messagingSenderId: "498904780285",
  appId: "1:498904780285:web:ed117532bcc19a17131d94"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
