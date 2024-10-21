import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import adminRoute from "./routes/admin.route.js"
import logger from "morgan";
dotenv.config({});


const app = express()
// mongoose.connect(""
// app.post("/login", req, res) => {
//     const {email,password} = req.body;
//     application.findone({email:email})
//         .then(user => {
//             if(user){
//                 if(user.password ===password){
//                     res.json.("success")

//                 }else{
//                     res.json("the password is incorrect")

//                 }
//             }
//         })

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "Welcome to the API",
    success: true
  })
})
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cookieParser());
app.use(logger("dev"));
const corsOptions = {
  origin: 'http://localhost:5173',
  credential: true
}

app.use(cors(corsOptions));
const PORT = process.env.PORT || 3000;
app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`)
})
