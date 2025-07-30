// server/routes/warehouse.js
import express from "express";
import {
    getAllWarehouses,
    getWarehouseById,
    deleteWarehouse,
    updateWarehouse,
    addWarehouse,
    getWarehouseByLocation,
} from "../controllers/warehouseController.js";

const router = express.Router();

// GET all
router.get("/", getAllWarehouses);

// POST add new
router.post("/", addWarehouse);

// DELETE by ID
router.delete("/:id", deleteWarehouse);

// PUT update by ID
router.put("/:id", updateWarehouse);

// GET warehouse by ID
router.get("/:id", getWarehouseById);

// Optional: filter by location (e.g., ?location=Toronto)
router.get("/search/location", getWarehouseByLocation);

export default router;
