import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import serviceRoutes from "./routes/serviceRoute.js";
import bookingRoutes from "./routes/bookingRoute.js"


//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/booking", bookingRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to computer service app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
