import { getDatabase, ref, set,onValue  } from "firebase/database"
import { app } from "./config.js";
import dotenv from "dotenv";

dotenv.config()
const database = getDatabase();
const db = getDatabase(app)
const dataRef = ref(db, 'users/karan/');
function putdata() {
    set(ref(db, "users/karan"), {
        id: 1,
        name: "karan mishra",
        age: 22
    });
    onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
       console.log("data",data);
        
    });
}
putdata()