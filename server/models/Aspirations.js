const { Schema, model } = require("mongoose");

const aspirationSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Aspiration must have a title"],
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    points: {
      type: Number,
      trim: true,
    },
    rewardTrait: {
      type: String,
      trim: true,
    },
    milestones: [
      {
        type: Schema.Types.ObjectId,
        ref: "Milestone",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Aspiration = model("Aspiration", aspirationSchema);

module.exports = Aspiration;
