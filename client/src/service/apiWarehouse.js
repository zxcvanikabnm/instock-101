import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL; // Keep it dynamic for deployment

export async function getAllWarehouse() {
  try {
    const res = await axios.get(`${API_URL}/warehouses`);
    return res.data;
  } catch (err) {
    throw Error("Failed getting all warehouses");
  }
}

export async function getWarehouseById(_id) {
  try {
    const res = await axios.get(`${API_URL}/warehouses/${_id}`);
    if (!res.data) throw new Error("Warehouse not found");
    return res.data;
  } catch (err) {
    throw Error("Failed getting warehouse by ID");
  }
}
