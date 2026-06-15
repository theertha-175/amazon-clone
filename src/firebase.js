import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-FiqsrJDB3Aq0jB8qebRGLS3B0nWr0x4",
  authDomain: "clone-dde25.firebaseapp.com",
  projectId: "clone-dde25",
  storageBucket: "clone-dde25.firebasestorage.app",
  messagingSenderId: "566970722246",
  appId: "1:566970722246:web:759d1f32a6eaf32ea134c7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };