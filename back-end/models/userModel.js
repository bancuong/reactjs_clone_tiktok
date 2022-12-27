const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
});
