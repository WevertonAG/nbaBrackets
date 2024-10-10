import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-6Trddq6dZm6YmVaN_pchoCOqMNJAYug",
  authDomain: "nbabolao-678b8.firebaseapp.com",
  projectId: "nbabolao-678b8",
  storageBucket: "nbabolao-678b8.appspot.com",
  messagingSenderId: "456066497743",
  appId: "1:456066497743:web:1fd11083c396b58c598bba",
  measurementId: "G-F8KNJQBKYH",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
