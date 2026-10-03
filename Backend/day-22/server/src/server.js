import app from "./app/app.js"
import connectToDb from "./config/db.js"

const startServer= async()=>{
        await connectToDb()

    try {

        app.listen(3000,()=>{
            console.log("server is running on port 3000")
        })
    
    } catch (error) {
       console.log(`failed to start server :${error.message}`);
       
    }

}

startServer()