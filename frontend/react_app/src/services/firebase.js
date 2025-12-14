// frontend/react_app/src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import {
  getFirestore,
  connectFirestoreEmulator,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLCWutGAF6kKQW3FGn2Fcc90t_aa5_oro",
  authDomain: "sih25019-4dbef.firebaseapp.com",
  projectId: "sih25019-4dbef",
  storageBucket: "sih25019-4dbef.firebasestorage.app",
  messagingSenderId: "963448623944",
  appId: "1:963448623944:web:2c1f54ffa76ab1d331197d",
  measurementId: "G-333KX3FWMH"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 👉 Connect to emulators (only in local dev)
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

// 🔹 Auth Helpers
export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const logoutUser = () => signOut(auth);

// 🔹 Firestore Helpers
export const createEntry = async (userId, title, status = "active") => {
  const docRef = await addDoc(collection(db, "entries"), {
    userId,
    title,
    status,
    createdAt: new Date()
  });
  return docRef.id;
};

export const getUserEntries = async (userId) => {
  const q = query(collection(db, "entries"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateEntry = async (entryId, updates) => {
  const entryRef = doc(db, "entries", entryId);
  await updateDoc(entryRef, updates);
};

export const deleteEntry = async (entryId) => {
  const entryRef = doc(db, "entries", entryId);
  await deleteDoc(entryRef);
};
