const app = require("./src/app");
const connectToDB = require("./src/config/db");

const startServer = async () => {
    try {
        await connectToDB()
        app.listen(3000, () => {
            console.log("server is running on port 3000")
        })
    } catch (error) {
        console.log("failed to start server ")
    }

}

startServer()