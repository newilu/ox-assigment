import express from "express";
import {
  createEmployee,
  getUsers,
  updateUserStatus,
} from "../controllers/userController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

router.get("/users", authenticateToken, getUsers);
router.post("/users", authenticateToken, createEmployee);
router.post("/users/:id", authenticateToken, updateUserStatus);

export default router;
