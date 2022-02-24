const { Schema, model } = require("mongoose");

const goalSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required for the goal!"],
    trim: true,
  },
});

const Goal = model("Goal", goalSchema);

module.exports = Goal;
