import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBjCSFtytpY6MesZ_k7WUsXMZCqte_QqfA",
  authDomain: "rnin30days.firebaseapp.com",
  databaseURL: "https://rnin30days.firebaseio.com",
  projectId: "rnin30days",
  storageBucket: "rnin30days.appspot.com",
  messagingSenderId: "509318577420",
  appId: "1:509318577420:web:894ca3e942d173021a1d29",
  measurementId: "G-93XMZWQVWE"
});

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export default app;
