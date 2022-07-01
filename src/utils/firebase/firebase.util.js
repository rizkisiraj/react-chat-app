import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection, getFirestore, limitToLast, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyApJysKwpBY6VVieWxA3qcfwpk7Bcjq_kA",
  authDomain: "notesapp-db-3e059.firebaseapp.com",
  projectId: "notesapp-db-3e059",
  storageBucket: "notesapp-db-3e059.appspot.com",
  messagingSenderId: "593409447144",
  appId: "1:593409447144:web:a635139ec926e8538d655d",
  measurementId: "G-381NTS87ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
const messageRef = collection(db, 'messages');
const q = query(messageRef, orderBy("createdAt"), limitToLast(20));

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => signInWithPopup(auth, provider);
export const onAuthStateChangedHandler = (callback) => onAuthStateChanged(auth,callback);
export const signOutUser = async () => signOut(auth); 
export const onDocumentSnapshotChange = (callback) => onSnapshot(q,callback);
export const addDocumentData = async ({profileURL, chat, uid}) => {
  await addDoc(messageRef, {
    createdAt: serverTimestamp(),
    profileURL,
    chat,
    uid
  })

}