// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvc0_dRxdW3U429UrDQF00ZhOInhj8vkQ",
  authDomain: "image-gallery-8d653.firebaseapp.com",
  projectId: "image-gallery-8d653",
  storageBucket: "image-gallery-8d653.appspot.com",
  messagingSenderId: "216764000874",
  appId: "1:216764000874:web:ad5b6bf73720c1a336f813"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const fireStore = getFirestore(app);

export const dataBase = {
    images: collection(fireStore, 'images')
}