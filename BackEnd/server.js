import app from "./app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
console.log("mongoURL:",process.env.MONGO_URL)
const port = process.env.PORT || 5001;
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("DATA BASE IS CONNECT");
});
app.listen(port, () => {
  console.log(`server is running ${port}`);
});
