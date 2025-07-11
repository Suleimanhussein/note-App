const express = require("express");
const {
  createNote,
  getAllNotes,
  updateNote,
  getNoteById,
  deleteNote,
} = require("../controllers/noteController");
const router = express.Router();

router.post("/", createNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
