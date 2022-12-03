import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    //...
    apiKey: "AIzaSyC4cvMH-aKVU4JOpGTonZ_pkcOTEItmHTQ",
    authDomain: "bike-rent-app-81995.firebaseapp.com",
    projectId: "bike-rent-app-81995",
    storageBucket: "bike-rent-app-81995.appspot.com",
    messagingSenderId: "1059981547267",
    appId: "1:1059981547267:web:e975a9b67bae34f4b6fb36",
    measurementId: "G-PP74SSWW9E",
    storageBucket: "gs://bike-rent-app-81995.appspot.com/"
};

// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
