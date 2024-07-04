import express from "express";

const router = express.Router();

const ideas = [
  {
    id: 1,
    description: "Develop a mobile app to track daily fitness activities",
    tags: ["fitness", "mobile", "app"],
    username: "fitguru",
    date: "2024-07-05",
  },
  {
    id: 2,
    description:
      "Create a platform for freelance photographers to showcase their work",
    tags: ["photography", "freelance", "portfolio"],
    username: "photoenthusiast",
    date: "2024-07-05",
  },
  {
    id: 3,
    description: "Design an AI-based tool for automated content generation",
    tags: ["AI", "content", "automation"],
    username: "techwizard",
    date: "2024-07-05",
  },
  {
    id: 4,
    description: "Build a website for booking and reviewing local tour guides",
    tags: ["travel", "booking", "reviews"],
    username: "travelbuff",
    date: "2024-07-05",
  },
  {
    id: 5,
    description:
      "Launch an online course for learning digital marketing strategies",
    tags: ["education", "marketing", "online course"],
    username: "marketpro",
    date: "2024-07-05",
  },
];

// get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

// get single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }
  res.json({ success: true, data: idea });
});

export { router };
