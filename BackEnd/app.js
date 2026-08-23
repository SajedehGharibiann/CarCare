import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { catchError } from "vanta-api";
import swaggerUi from "swagger-ui-express";
import rateLimit from "express-rate-limit";
import { exportValidationData } from "./Middleware/ExportValidation.js";
import authRouter from "./Module/Auth/auth.js";
import vehicleRouter from "./Module/Vehicle/vehicle.js";
import userRouter from "./Module/User/user.js";
import reminderRouter from "./Module/Reminder/reminder.js";
import maintenanceRouter from "./Module/Maintenance/maintenance.js";
const app = express();
const __filename = fileURLToPath(import.meta.url);
export const __direname = path.dirname(__filename);
const limit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
  message: "ip blocked",
});
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/upload", express.static(`${__direname}/Public`));
app.use(exportValidationData);
app.use(limit);
app.use("/api/auth", authRouter);
app.use("/api/vehicle", vehicleRouter);
app.use("/api/user", userRouter);
app.use("/api/reminder", reminderRouter);
app.use("/api/maintenance", maintenanceRouter);
app.use((req, res, next) => {
  return res.status(404).json({
    success: false,
    message: "not found route",
  });
});
app.use(catchError);
export default app;
