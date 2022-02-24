const { Schema, model } = require("mongoose");
const { hash, compare } = require("bcrypt");

// TODO double check packs string
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "User must have a username!"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "User must have an email address!"],
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: [true, "User must enter a password!"],
      minlength: 5,
    },
    packs: [String],
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
userSchema.methods.isCorrectPassword = async function (password) {
  return compare(password, this.password);
};
// virtual for retrieving number of user's save files
userSchema.virtual("saveFileCount").get(function () {
  return this.saveFile.length;
});
// virtual for retrieving number of user's packs
userSchema.virtual("packCount").get(function () {
  return this.packs.length;
});

// create model from schema
const User = model("User", userSchema);

module.exports = User;
