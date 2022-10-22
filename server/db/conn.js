const mongoose = require("mongoose");

const DB =
  "mongodb+srv://sagar:sagar1234@cluster0.6zkyzqx.mongodb.net/mernstack";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
