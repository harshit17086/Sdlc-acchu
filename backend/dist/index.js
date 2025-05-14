"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_1 = require("./config/swagger");
const upload_1 = __importDefault(require("./routes/upload")); // Import the upload router
const app = (0, express_1.default)();
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173"; // Default to localhost if not set
app.use((0, cors_1.default)({
    origin: clientOrigin, // Allow requests from this origin
}));
app.use(express_1.default.json());
// Mount Swagger UI
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.specs));
app.use("/api/upload", upload_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
