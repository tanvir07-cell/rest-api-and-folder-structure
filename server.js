import express from "express";
import { userRouter } from "./src/User/Routes/userRoutes.js";
import fs from "node:fs/promises";
import morgan from "morgan";

const app = express();

// for serving static files:
// static folder gula always root server ei use korte hoy tai url(/) diyechi:
app.use("/", express.static("./public"));

app.use(morgan("dev"));

// using the router middleware:
app.use("/api/v1/users", userRouter);

// for 404 error global error handler middleware:
app.use((req, res, next) => {
  const error = new Error("404 not found");
  error.status = 404;
  next(error);
});

app.use(async (error, req, res, next) => {
  if (error.status) {
    const ERROR_PATH = new URL("./src/pages/error.html", import.meta.url);
    const Error = await fs.readFile(ERROR_PATH, "utf-8");
    return res.status(error.status).send(Error);
  }
  return res.status(500).json({ message: "server error ocurred" });
});

// creating global custom logger middleware:
// custom middleware always call next()
// otherwise it will stop the request and hang the system
// always controller should be the last middleware
// controller always send response otherwise it will hang the system
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}  ${new Date().toLocaleString()}`);

  //   ekhon chaitesi middleware thekei response pathate er fole middleware ti amar controller e jabei nah
  if (req.query.name === "Tanvir") {
    return res.status(400).json({ message: "Something went wrong!" });
  }

  next();
});

app.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
