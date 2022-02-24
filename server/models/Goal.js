const { Schema, model } = require("mongoose");

const goalSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required for the goal!"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    points: {
      type: Number,
      trim: true,
    },
    sim: {
      type: Schema.Types.ObjectId,
      ref: "Sim",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Goal = model("Goal", goalSchema);

module.exports = Goal;
