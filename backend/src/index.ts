import swaggerUi from "swagger-ui-express";
import express from "express";
import cors from "cors";
import { specs } from "./config/swagger";

import uploadRouter from "./routes/upload"; // Import the upload router
import aiRouter from "./routes/ai"; // Import the AI router
import aiToolsRouter from "./routes/ai-tools"; // Import the AI tools router

const app = express();
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173"; // Default to localhost if not set
app.use(
  cors({
    origin: clientOrigin, // Allow requests from this origin
  })
);

app.use(express.json());

// Mount Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/api/upload", uploadRouter);
app.use("/api/ai", aiRouter); // Mount AI routes
app.use("/api/ai-tools", aiToolsRouter); // Mount additional AI tools routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
