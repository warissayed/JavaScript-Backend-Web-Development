import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*
//first approach for creating backend and connecting mongodb and running on port 
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error.message);
    throw error;
  }
})();*/
