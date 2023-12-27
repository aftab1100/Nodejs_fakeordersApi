const express = require("express");
const { testRoute } = require("./routes/test/test");
const app = express();
require("dotenv").config();

//Test Route
app.use(testRoute);

//Server Starting
let PORT = process.env.PORTNO;
app.listen(PORT, (err) => {
  if (err) {
    console.log("This is Server is error ", err);
  } else {
    console.log("This is Server is Successfully ", PORT);
  }
});
