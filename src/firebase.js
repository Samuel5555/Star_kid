import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf5JMNiZxVJIGTPKGYeRn4p406qVGpbFM",
  authDomain: "davidibiyeomie2021.firebaseapp.com",
  projectId: "davidibiyeomie2021",
  storageBucket: "davidibiyeomie2021.appspot.com",
  messagingSenderId: "36468876993",
  appId: "1:36468876993:web:f451736638327d93519640",
  measurementId: "G-NB1ZRYN8PE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = firebase.firestore();
