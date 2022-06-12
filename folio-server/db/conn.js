const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL, { authSource: "admin" })
  .then(() => {
    console.log("CONNECTED SUCCESSFULLY TO MONGODB...");
  })
  .catch((e) => {
    console.log("---ERROR CONNECTING TO MONGODB---\n", e);
  });
