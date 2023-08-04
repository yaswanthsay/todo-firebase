import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyALcwhYkMtaTRZ6bMu0_Uiz2M0BOPTd9yg",
  authDomain: "todo-app-b6d4a.firebaseapp.com",
  projectId: "todo-app-b6d4a",
  storageBucket: "todo-app-b6d4a.appspot.com",
  messagingSenderId: "503946649820",
  appId: "1:503946649820:web:48bf75153ea3fbe048d419",
  measurementId: "G-0X3Z02KEJH"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

