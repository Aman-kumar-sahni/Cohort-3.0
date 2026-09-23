const app = require("./src/app");
const connectToDb = require("./src/config/db");

const startServer = async () => {
    try {
        await connectToDb();

        app.listen(3000, () => {
            console.log("SERVER IS RUNNING ON PORT 3000");
        });

    } catch (error) {
        console.log(error.message);
        console.log("SERVER FAILED TO START");
    }
};

startServer();