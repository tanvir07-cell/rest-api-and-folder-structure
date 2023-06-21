import fs from "node:fs/promises";

export const userAboutServices = async (req, res) => {
  try {
    const DB_PATH = new URL("../../pages/about.html", import.meta.url);
    const data = await fs.readFile(DB_PATH, "utf-8");
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something Went Wrong!" });
  }
};
