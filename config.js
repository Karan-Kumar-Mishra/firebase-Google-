import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyC-NNHnn71JIceAUY17U0EKsFlCtgDjcys",
    authDomain:process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGEING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
    databaseURL:process.env.DATABASE_URL
};

export const app = initializeApp(firebaseConfig);




