const { Schema, model } = require("mongoose");

const lotSchema = new Schema({
  name: {
    type: String,
    required: [true, "Lot name is required!"],
    trim: true,
  },
});

const Lot = model("Lot", lotSchema);

module.exports = Lot;
