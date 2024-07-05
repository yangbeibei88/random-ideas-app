import express from "express";
import {
  getIdeas,
  getIdea,
  createIdea,
  updateIdea,
  deleteIdea,
} from "../controllers/ideaController.js";

const router = express.Router();

// get all ideas
router.get("/", getIdeas);

// get single idea
router.get("/:id", getIdea);

// post an idea
router.post("/", createIdea);

// update an idea
router.put("/:id", updateIdea);

// delete an idea
router.delete("/:id", deleteIdea);

export { router };
