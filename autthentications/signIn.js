import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../config.js"
const auth = getAuth(app);
signInWithEmailAndPassword(auth, "zackmishra@gmail.com", "kjsdfh9487kkm")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    //console.log(errorMessage)
  });