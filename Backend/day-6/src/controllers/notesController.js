const notesModel = require("../models/notesModel");


//CREATE NOTES
const registerController = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      priority,
      isCompleted,
      tags,
    } = req.body;

    const newNote = await notesModel.create({
      title,
      description,
      category,
      priority,
      isCompleted,
      tags,
    });

    res.status(201).json({
      message: "Note created successfully",
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create note",
      error: error.message,
    });
  }
};
//GET NOTES
const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await notesModel.find();

    res.status(200).json({
      message: "All notes fetched successfully",
      data: allNotes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch notes",
      error: error.message,
    });
  }
};
//GET SINGLE NOTES

const getSingleNotesController = async (req, res) => {
  try {
    const id = req.params.id;

    const singleNotes = await notesModel.findById(id);

    if (singleNotes) {
      res.status(200).json({
        message: "Note fetched by id successfully",
        data: singleNotes,
      });
    } else {
      res.status(404).json({
        message: "Note not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Note not fetched",
      error: error.message,
    });
  }
};

//UPDATENOTES

const updateNotesController = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const updatedNotes = await notesModel.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );

    if (!updatedNotes) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json({
      message: "Notes updated successfully",
      data: updatedNotes,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to update notes",
      error: error.message,
    });
  }
};
//DELTE NOTES
const deleteNotesController = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedNote = await notesModel.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({
        message: "Note not found",
      });
    }

    res.status(200).json({
      message: "Note deleted successfully",
      data: deletedNote,
    });

  } catch (error) {
    res.status(500).json({
      message: "Failed to delete note",
      error: error.message,
    });
  }
};
module.exports = {
  registerController,
  getAllNotesController,
  getSingleNotesController,
  deleteNotesController,
  
  updateNotesController
};