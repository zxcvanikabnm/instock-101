import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import warehouseRoutes from "./routes/warehouse.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

app.use("/warehouses", warehouseRoutes);

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected ✅");
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        );
    })
    .catch((err) => console.error("MongoDB connection error ❌", err));
