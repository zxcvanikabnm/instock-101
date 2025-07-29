import Warehouse from "../models/Warehouse.js";

// GET all warehouses
// tested on frontend and postman and it works on both
export const getAllWarehouses = async (req, res) => {
    try {
        const warehouses = await Warehouse.find();
        res.json(warehouses);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// POST create a new warehouse
// tested on postman and it works
export const addWarehouse = async (req, res) => {
    try {
        const newWarehouse = new Warehouse(req.body);
        await newWarehouse.save();
        res.status(201).json(newWarehouse);
    } catch (err) {
        res.status(400).json({ error: "Failed to add warehouse" });
    }
};

// DELETE a warehouse
// tested on postman and it works
export const deleteWarehouse = async (req, res) => {
    try {
        const deleted = await Warehouse.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: "Not found" });
        res.json({ message: "Warehouse deleted" });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// PUT update a warehouse
// tested on postman and it works
export const updateWarehouse = async (req, res) => {
    try {
        const updated = await Warehouse.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) return res.status(404).json({ error: "Not found" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: "Failed to update" });
    }
};

// GET by location (e.g. /warehouses/search/location?location=Toronto)
// tested on postman and it works
export const getWarehouseByLocation = async (req, res) => {
    const { location } = req.query;
    try {
        const results = await Warehouse.find({
            addressProv: { $regex: location, $options: "i" },
        });
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
