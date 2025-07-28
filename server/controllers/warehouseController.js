import Warehouse from '../models/Warehouse.js';

export async function getAllWarehouses(req, res) {
  try {
    const warehouses = await Warehouse.find();
    res.json(warehouses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch warehouses' });
  }
}
