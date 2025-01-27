import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SEND_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//This code will throw an error if any of the config values are incorrect or missing. This leads to unexpected behavior.  Firebase doesn't always provide clear error messages.
