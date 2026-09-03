const express = require("express")
const { registerController, getAllNotesController, getSingleNotesController, deleteNotesController, updateNotesController } = require("../controllers/notesController")
const router = express.Router();

router.post("/create", registerController,)
router.get("/getallnotes", getAllNotesController),
router.get("/getsinglenotes/:id", getSingleNotesController),
router.patch("/updatenotes/:id", updateNotesController)
router.delete("/deletenotes/:id", deleteNotesController),

    module.exports = router