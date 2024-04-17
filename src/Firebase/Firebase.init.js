// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhhkkMSoIbCrMzM3HbdDZ1s3zqv1idxBM",
  authDomain: "real-state-a9-e6e3f.firebaseapp.com",
  projectId: "real-state-a9-e6e3f",
  storageBucket: "real-state-a9-e6e3f.appspot.com",
  messagingSenderId: "851714280059",
  appId: "1:851714280059:web:96176e3b8d37f0519c30de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth ;
