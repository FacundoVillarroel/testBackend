const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./src/config/db");

const tasksRouter = require("./src/routes/taskRoutes");

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

//middlewares
app.use(express.json());
// Middleware for CORS handling
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

//routes
app.use("/api/tasks", tasksRouter);

//connection to mongoDB
connectDB();

app.listen(PORT, () => {
  console.log("App listening in port: ", PORT);
});
