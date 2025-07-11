const noteModel = require("../models/noteModel");

const getAllNotes = async (req, res) => {
  try {
    const allNotes = await noteModel.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "all notes", allNotes });
  } catch (error) {
    res.status(500).json(error.message);
    console.log(error.message);
  }
};

const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const note = new noteModel({ title, description });

    const savedNote = await note.save();

    // const savedNote = await new noteModel(req.body);
    res.status(201).json(savedNote);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ err: error.message, message: "please fill all" });
  }
};

const getNoteById = async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updated = await noteModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
      },
      { new: true }
    );

    if (!updated) return res.status(500).json("not found this id");
    res.status(200).json({ message: "Note updated successfully", updated });
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const deleteNote = async (req, res) => {
  try {
    const deleted = await noteModel.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Note not found with this ID" });
    }

    res.status(200).json({ message: "Note deleted successfully", deleted });
  } catch (error) {
    console.error("Delete error:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  updateNote,
  getNoteById,
  deleteNote,
};
