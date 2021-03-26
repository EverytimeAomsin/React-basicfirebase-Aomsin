import firebase from 'firebase/app';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxjfLEkHLoXzzGuAd3Y_XtyrNjw5hLEGs",
  authDomain: "forums-98036.firebaseapp.com",
  projectId: "forums-98036",
  storageBucket: "forums-98036.appspot.com",
  messagingSenderId: "620045966981",
  appId: "1:620045966981:web:b8df4dbf7deaad1b12d3ec",
  measurementId: "G-SNDNMLNK6R"
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;