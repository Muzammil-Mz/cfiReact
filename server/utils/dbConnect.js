import mongoose from "mongoose";
import config from "config";

async function dbConnect() {
  try {
    let dbUrl = config.get("DB_URL");
    await mongoose.connect(dbUrl);
    console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
}

dbConnect();
