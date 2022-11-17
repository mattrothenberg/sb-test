import type { Handler } from "vite-plugin-mix";
import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/blocks.config.json", (req, res) => {
  const blocksConfigPath = path.join(process.cwd(), "blocks.config.json");
  const blocksConfigContent = fs.readFileSync(blocksConfigPath, "utf-8");
  res.json(JSON.parse(blocksConfigContent));
});

app.get("/git.config.json", (req, res) => {
  res.json({
    owner: "githubnext",
    repo: "blocks-tutorial",
  });
});

export const handler = app;
