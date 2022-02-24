const { Schema, model } = require("mongoose");

const lotSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Lot name is required!"],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    building: {
      type: Schema.Types.ObjectId,
      ref: "Building",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Lot = model("Lot", lotSchema);

module.exports = Lot;
