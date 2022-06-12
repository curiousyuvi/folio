const express = require("express");
const app = express();
const cors = require("cors");

require("./db/conn");
const User = require("./models/userSchema");
app.use(cors());
app.use(express.json());
app.use("/api", require("./router/user"));

app.listen("5000", () => {
  console.log("server listening on port 5000...");
});
