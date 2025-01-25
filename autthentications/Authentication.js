
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../config.js";
import dotenv from "dotenv";
const auth=getAuth(app)
dotenv.config()

function creatUser() {   
    createUserWithEmailAndPassword(
        auth,
        "zackmishra@gmail.com",
        "kjsdfh9487kkm"
    )
}
creatUser()