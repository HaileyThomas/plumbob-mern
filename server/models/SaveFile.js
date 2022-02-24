const { Schema, model } = require("mongoose");

const saveFileSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Save File must have a name!"],
      trim: true,
    },
    worlds: [
      {
        type: Schema.Types.ObjectId,
        ref: "World",
      },
    ],
    households: [
      {
        type: Schema.Types.ObjectId,
        ref: "Household",
      },
    ],
    challenges: [
      {
        type: Schema.Types.ObjectId,
        ref: "Challenge",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// create model from schema
const SaveFile = model("SaveFile", saveFileSchema);

// export
module.exports = SaveFile;
