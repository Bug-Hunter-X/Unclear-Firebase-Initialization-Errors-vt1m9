import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SEND_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
// Check if Firebase is already initialized
const apps = getApps();
if (apps.length === 0) {
  try {
    const app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully', app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  console.log('Firebase already initialized');
}
//This improved solution includes error handling and checks for pre-existing initialization. This provides more informative feedback to developers.