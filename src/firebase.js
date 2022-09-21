import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTP9iKpzD-tiOnayi1d03NcVcowGQEtFo",
  authDomain: "chat-81c11.firebaseapp.com",
  projectId: "chat-81c11",
  storageBucket: "chat-81c11.appspot.com",
  messagingSenderId: "479474515575",
  appId: "1:479474515575:web:c42d760d65691637ec5072",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
