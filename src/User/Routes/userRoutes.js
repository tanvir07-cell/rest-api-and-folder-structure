import express from "express";
import { userHomeController } from "../Controllers/userHomeController.js";
import { userAboutController } from "../Controllers/userAboutController.js";

export const userRouter = express.Router();

// creating a local custom middleware:
const localMiddleware = (req, res, next) => {
  console.log("This is the custom local middleware");
  next();
};

userRouter.get("/", localMiddleware, userHomeController);

userRouter.get("/about", localMiddleware, userAboutController);
