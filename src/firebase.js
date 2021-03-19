import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyDmvduajDhL68xQPkVCbPfCF7lVwAzhjLM",
  authDomain: "pvt-h21-fabrizio.firebaseapp.com",
  databaseURL: "https://pvt-h21-fabrizio-default-rtdb.firebaseio.com",
  projectId: "pvt-h21-fabrizio",
  storageBucket: "pvt-h21-fabrizio.appspot.com",
  messagingSenderId: "818019251943",
  appId: "1:818019251943:web:954aabb84031638f22d442",
  measurementId: "G-886VSQPLJ6"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
