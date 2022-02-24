const { Schema, model } = require("mongoose");

const worldSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "The name of the world is required!"],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    lots: [
      {
        type: Schema.Types.ObjectId,
        ref: "Lot",
      },
    ],
    buildings: [
      {
        type: Schema.Types.ObjectId,
        ref: "Building",
      },
    ],
    Households: [
      {
        type: Schema.Types.ObjectId,
        ref: "Household",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const World = model("World", worldSchema);

module.exports = World;
