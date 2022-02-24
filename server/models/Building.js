const { Schema, model } = require("mongoose");

const buildingSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Building name is required!"],
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
