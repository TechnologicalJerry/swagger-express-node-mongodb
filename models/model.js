const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  secondName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("Data", dataSchema);
