const { Schema, model } = require("mongoose");

const saveFileSchema = new Schema({
  name: {
    type: String,
    required: [true, "Save File must have a name!"],
    trim: true,
  },
});

// create model from schema
const SaveFile = model("SaveFile", saveFileSchema);

// export
module.exports = SaveFile;
