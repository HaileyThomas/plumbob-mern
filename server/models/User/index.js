const { Schema, model } = require("mongoose");
const { hash, compare } = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    packs: {
      type: String,
      enum: ["", ""],
      trim: true,
    },
    saveFiles: [
      {
        type: Schema.Types.ObjectId,
        ref: "SaveFile",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
// compare incoming password to hashed password
// virtual for retrieving number of user's save files
// virtual for retrieving number of user's packs
module.exports = User;
