// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.envVITE_APIKEY,
  authDomain:import.meta.envVITE_AUTHDOMAIN,
  projectId:import.meta.envVITE_PROJECTID,
  storageBucket:import.meta.envVITE_STORAGEBUCKET,
  messagingSenderId:import.meta.envVITE_MESSAGINGSENDERID,
  appId:import.meta.envVITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth ;
