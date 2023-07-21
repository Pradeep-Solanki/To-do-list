const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/ToDoRoutes.js");
// Rest of the code remains unchanged
// Added the 'dotenv' import

// dotenv.config(); // Load environment variables from .env file
// const MONGO_URL =
//   "mongodb+srv://Pradeep:root1234@blog-app.40zdgfr.mongodb.net/";
const app = express();
const PORT = process.env.port || 5000;
app.use(express.json());
app.use(cors());
// Corrected the process.env.PORT
// const PORT = 5000;
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.error("Error connecting to MongoDB:", err)); // Improved error handling

app.use(routes);
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
