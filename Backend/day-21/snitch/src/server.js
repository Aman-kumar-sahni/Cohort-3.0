import app from "./app/app.js";
import connecToDb from "./config/db.js";


const startServer =async ()=>{
           await connecToDb()

    try {

        app.listen(3000,()=>{
            console.log("server is running on poert 3000 ")
        })
    } catch (error) {
       console.log(`failed to start server ${error.message}`) 
    }
}

startServer()