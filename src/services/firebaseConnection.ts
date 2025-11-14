import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-MiLxj7dQ2f0Nw1m8Nx8gGSHBzr9gsZo",
  authDomain: "thedailydish-f0ef5.firebaseapp.com",
  projectId: "thedailydish-f0ef5",
  storageBucket: "thedailydish-f0ef5.firebasestorage.app",
  messagingSenderId: "229576927322",
  appId: "1:229576927322:web:23a3823f3d013b61099063"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
