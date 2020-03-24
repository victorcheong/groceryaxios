import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBae8w-qs6ATS08zn3jxqM-5aO0bymtLeo",
  authDomain: "grocery-project-5a285.firebaseapp.com",
  databaseURL: "https://grocery-project-5a285.firebaseio.com",
  projectId: "grocery-project-5a285",
  storageBucket: "grocery-project-5a285.appspot.com",
  messagingSenderId: "581469249285",
  appId: "1:581469249285:web:1e1a402253d6072468616c",
  measurementId: "G-Q2EV7E4N9Q"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;