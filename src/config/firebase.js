// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyD03CBr2FtG5VFM6Jn0B3DcSGcRy9_NndU",
  authDomain: "practica-extraordinaria.firebaseapp.com",
  projectId: "practica-extraordinaria",
  storageBucket: "practica-extraordinaria.firebasestorage.app",
  messagingSenderId: "235062356131",
  appId: "1:235062356131:web:1e420d9f1a77d45e4c3716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig); */
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, TEST } from '@env';
 
console.log(TEST);
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID
};
 
// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
} else {
  app = getApp();
  console.log('Firebase already initialized');
}
 
const database = getFirestore(app);
if (database) {
  console.log('Firestore initialized correctly');
} else {
  console.log('Firestore initialization failed');
}
 
const storage = getStorage(app);
if (storage) {
  console.log('storage initialized correctly');
} else {
  console.log('storage initialization failed');
}
 
const authentication = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
console.log(firebaseConfig);
export { database, storage, authentication };