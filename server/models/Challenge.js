const { Schema, model } = require("mongoose");

const challengeSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must enter in a name for the Challenge!"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: [
      "UNCHECKED",
      "INTERESTED",
      "IN_PROGRESS",
      "TAKING_BREAK",
      "COMPLETED",
    ],
    default: "UNCHECKED",
  },
  goals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Goal",
    },
  ],
});

// set up model from schema
const Challenge = model("Challenge", challengeSchema);

module.exports = Challenge;
