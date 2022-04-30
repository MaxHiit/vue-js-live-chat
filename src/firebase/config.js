// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAmdYTS04BhKZPFAPV9Af2NRN5WCcNAY6w',
	authDomain: 'vue-js-live-chat-d2e76.firebaseapp.com',
	projectId: 'vue-js-live-chat-d2e76',
	storageBucket: 'vue-js-live-chat-d2e76.appspot.com',
	messagingSenderId: '47607792168',
	appId: '1:47607792168:web:786bda3c935b3881196b1d'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore service
const db = getFirestore(app);
const timestamp = () => Timestamp.now();

console.log(timestamp);

export { db, timestamp };
