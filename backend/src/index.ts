import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import dotenv from "dotenv";
import cors from "cors";
import { Employee } from "./models/Employee";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Настройка CORS
app.use(
  cors({
    origin: "http://localhost:3000", // Разрешаем запросы с фронтенда
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017/employees")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Инициализация тестовых данных
Employee.countDocuments().then((count) => {
  if (count === 0) {
    const initialEmployees = [
      {
        id: 1,
        name: "John",
        status: "Working",
        img: "https://picsum.photos/id/15/200/300",
      },
      {
        id: 2,
        name: "Jack",
        status: "Working",
        img: "https://picsum.photos/id/237/200/300",
      },
      {
        id: 3,
        name: "Sheli",
        status: "Working",
        img: "https://picsum.photos/id/30/200/300",
      },
      {
        id: 4,
        name: "Eitan",
        status: "Working",
        img: "https://picsum.photos/id/59/200/300",
      },
    ];
    Employee.insertMany(initialEmployees).then(() =>
      console.log("Initial employees inserted"),
    );
  }
});

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
