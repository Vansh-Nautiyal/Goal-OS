import Groq from "groq-sdk";
import { roadmapPrompt, recalculatePrompt } from "../utils/promptTemplates.js";
import dotenv from "dotenv"
dotenv.config();

// Initialize Groq with the API key from .env
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Helper to clean and parse JSON from the response
const parseJSON = (text) => {
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
  return JSON.parse(cleaned);
};

// Generate a full roadmap for a new goal
export const generateRoadmap = async (title, description, deadline, hoursPerDay, level) => {
  try {
    const prompt = roadmapPrompt(title, description, deadline, hoursPerDay, level);

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 4000,
    });

    const text = response.choices[0].message.content;
    return parseJSON(text);
  } catch (error) {
    console.error("Error generating roadmap from Groq:", error.message);
    throw new Error("Failed to generate roadmap from AI");
  }
};

// Recalculate the next 7-day plan based on progress
export const recalculateRoadmap = async (title, completedTasks, pendingTasks, remainingDays) => {
  try {
    const prompt = recalculatePrompt(title, completedTasks, pendingTasks, remainingDays);

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const text = response.choices[0].message.content;
    return parseJSON(text);
  } catch (error) {
    console.error("Error recalculating roadmap from Groq:", error.message);
    throw new Error("Failed to recalculate roadmap from AI");
  }
};