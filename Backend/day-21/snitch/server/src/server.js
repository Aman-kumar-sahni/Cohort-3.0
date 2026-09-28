import app from "./app/app.js";
import config from "./config/config.js";
import connectDB from "./config/db.js";

const startServer = async () => {
  try {
    // Connect database
    await connectDB();

    // Start server
    app.listen(3000, () => {
      console.log(`Server running on port 3000`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();