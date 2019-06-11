import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGvWeSvK7dFG8fOi-z-8jKFJ-EO7U4pXo",
  authDomain: "burgerqueen-30488.firebaseapp.com",
  databaseURL: "https://burgerqueen-30488.firebaseio.com",
  projectId: "burgerqueen-30488",
  storageBucket: "burgerqueen-30488.appspot.com",
  messagingSenderId: "663543795372",
  appId: "1:663543795372:web:c7b6a124ea3afe39"
};

firebase.initializeApp(firebaseConfig);

export default firebase;