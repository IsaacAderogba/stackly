import firebase from 'firebase/app'; // import just base features of firebase app
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBeTsyAblC1RAVkueg0SbG-7NNC8vq4Q10",
    authDomain: "stackly-b8313.firebaseapp.com",
    databaseURL: "https://stackly-b8313.firebaseio.com",
    projectId: "stackly-b8313",
    storageBucket: "",
    messagingSenderId: "549964960873",
    appId: "1:549964960873:web:5d7bdf5ee3226315"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;