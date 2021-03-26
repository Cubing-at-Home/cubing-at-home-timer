import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: 'cubing-at-home.firebaseapp.com',
  databaseURL: 'https://cubing-at-home.firebaseio.com',
  projectId: 'cubing-at-home',
  storageBucket: 'cubing-at-home.appspot.com',
  messagingSenderId: '1053566413406',
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default firebaseConfig;