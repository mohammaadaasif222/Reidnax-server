import Entry from "./model.js";
import  {data}  from "./data.js";
import mongoose from "mongoose";
import {connectDatabase} from "./connectDB.js";

async function seedData() {
  try {
    connectDatabase()
    await Entry.deleteMany({});
    console.log("Deleted all entries");
    await Entry.create(data);
    console.log("Created all entries successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    mongoose.disconnect(); 
  }
}
seedData();
