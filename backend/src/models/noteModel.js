const { default: mongoose } = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const noteModel = mongoose.model("note", noteSchema);
module.exports = noteModel;
