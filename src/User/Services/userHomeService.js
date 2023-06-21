import fs from "node:fs/promises";
export const userHomeServices = async (req, res, next) => {
  const DB_PATH = new URL("../pages/index.html", import.meta.url);

  try {
    const err = new Error("Bad Request");
    err.status = 400;
    throw err;
    const data = await fs.readFile(DB_PATH, "utf-8");
    return res.status(200).send(data);
  } catch (err) {
    console.log(err);
    return res
      .status(err.status || 500)
      .send(
        err.message
          ? `<h1>${err.message}</h1>`
          : `<h1>Server error ocurred</h1>`
      );
  }
};
