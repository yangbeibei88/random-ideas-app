import { Idea } from "../models/Idea.js";

// get all ideas
export const getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// get one idea
export const getIdea = async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    console.log(idea);
    res.status(200).json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// create new idea
export const createIdea = async (req, res) => {
  // instantiate new Idea
  const newIdea = new Idea({
    description: req.body.description,
    tags: req.body.tags.split(",").map((tag) => tag.trim().toLowerCase()),
    username: req.body.username,
  });

  try {
    const savedNewIdea = await newIdea.save();
    console.log(savedNewIdea);
    res.status(201).json({ success: true, data: savedNewIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// update an idea
export const updateIdea = async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          description: req.body.description,
          tags: req.body.tags.split(","),
        },
      },
      { new: true }
    );
    console.log(updatedIdea);
    res.status(200).json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};

// delete an idea
export const deleteIdea = async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
};
