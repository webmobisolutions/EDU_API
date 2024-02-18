import { app } from "./app.js";
import { config } from "dotenv";
import cloudinary from "cloudinary";

// Services
import { connectDatabase } from "./config/database.js";

config({ path: "./config/config.env" });
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect Database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});