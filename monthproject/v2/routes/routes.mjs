import express from "express";
import {
  getUsers,
  getUserById,
  getUsersByQuery,
  createUser,
  patchUser,
} from "../controllers/userController.mjs";
import { loggingMiddleware } from "../middlewares/loggingMiddleware.mjs";
import { checkSchema, validationResult } from "express-validator";
import { validationSchema } from "../utils/validationSchema.mjs";
import resolveUserByIndex from "../middlewares/resolveuser.mjs";

const router = express.Router();

// getting users
router.get("/", resolveUserByIndex, getUsers);

// getting users by id
router.get("/:id", getUserById);

// getting users based on query parameters
router.get("/", checkSchema(validationSchema), getUsersByQuery);

// POST
router.post("/", checkSchema(validationSchema), createUser);

// PATCH
router.patch("/:id", checkSchema(validationSchema), patchUser);

export default router;
