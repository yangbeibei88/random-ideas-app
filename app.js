import express from "express";
import { router as ideasRouter } from "./routes/ideas.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

app.use("/api/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
