const { Schema, model } = require("mongoose");

const buildingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Building name is required!"],
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Building = model("Building", buildingSchema);

module.exports = Building;
