import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4T-LJN7moIFyfTNPbbRLzkQ3GnQd13g0",
  authDomain: "catch-of-the-day-adam-c6282.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-adam-c6282.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
