import fs from "node:fs/promises";
import { userAboutServices } from "../Services/userAboutService.js";

export const userAboutController = async (req, res) => {
  try {
    await userAboutServices(req, res);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something Went Wrong!" });
  }
};
