import mongoose from "mongoose";
const { Schema } = mongoose;

const IdeaSchema = new Schema({
  description: { type: String, required: [true, "Please add your idea"] },
  tags: { type: [String] },
  username: { type: String },
  date: { type: Date, default: Date.now },
});

export const Idea = mongoose.model("Idea", IdeaSchema);
