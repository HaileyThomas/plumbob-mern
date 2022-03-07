const { Schema, model } = require("mongoose");

// TODO edit occult types
// TODO look into traits
const simSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required for a Sim!"],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    biography: {
      type: String,
      trim: true,
    },
    traits: [String],
    occult: {
      type: String,
      enum: ["OCCULT TYPES HERE"],
      default: "human",
    },
    relationship: {
      type: String,
      enum: ["SINGLE", "TAKEN", "MARRIED"],
      default: "SINGLE",
    },
    aspirations: [
      {
        type: Schema.Types.ObjectId,
        ref: "Aspiration",
      },
    ],
    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    status: {
      type: String,
      enum: ["ALIVE", "DECEASED"],
      default: "ALIVE",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Sim = model("Sim", simSchema);

module.exports = Sim;
