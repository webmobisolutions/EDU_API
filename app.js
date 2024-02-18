import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

// Routers
import Routers from "./Routers/User.js";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(cors());

app.use("/api/v1", Routers);

app.get("/", (req, res) => {
    res.send("Server is working!");
});