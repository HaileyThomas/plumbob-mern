const { Schema, model } = require("mongoose");

const householdSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Household's must have a name!"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["MyHouseholds", "Townies"],
      default: ["Townie"],
    },
    description: {
      type: String,
      trim: true,
    },
    sims: [
      {
        type: Schema.Types.ObjectId,
        ref: "Sim",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Household = model("Household", householdSchema);

module.exports = Household;
