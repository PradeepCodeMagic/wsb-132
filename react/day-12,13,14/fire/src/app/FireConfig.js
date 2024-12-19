// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlRvSczu02_9JhweoAW2oX34zs0IcusvQ",
  authDomain: "wsb-132.firebaseapp.com",
  projectId: "wsb-132",
  storageBucket: "wsb-132.firebasestorage.app",
  messagingSenderId: "152290189666",
  appId: "1:152290189666:web:283f5e0ffc2429065b0c3b",
  measurementId: "G-YC0PCJ8SDG"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);