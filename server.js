require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser= require("body-parser")

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Successfully connected with mongoose");
  })
  .catch((error) => {
    console.log("Mongoose connection error", error);
  });

app.use(express.json());
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}))

require("./routes/index")(app)


 

app.listen(PORT, () => {
  console.log(`Server is successfully running at http://localhost:${PORT}`);
});
