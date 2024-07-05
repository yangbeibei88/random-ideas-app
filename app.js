import express from "express";
import { router as ideasRouter } from "./routes/ideas.js";

const PORT = process.env.PORT || 8080;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

// hook the path to ideasEouter
app.use("/api/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is listening to http://localhost:${PORT}`);
});
