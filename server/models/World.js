const { Schema, model } = require("mongoose");

const worldSchema = new Schema({
    name: {
        type: String,
        required: [true, "The name of the world is required!"],
        trim: true
    }
});

const World = model("World", worldSchema),

module.exports = World;