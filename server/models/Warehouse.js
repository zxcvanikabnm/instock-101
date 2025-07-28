import mongoose from 'mongoose';
import productSchema from './Product.js';

const warehouseSchema = new mongoose.Schema({
  id: Number,
  warehouse: String,
  addressStreet: String,
  addressProv: String,
  contactName: String,
  contactPosition: String,
  contactNumber: String,
  contactEmail: String,
  inventory: [productSchema],
});

const Warehouse = mongoose.model('Warehouse', warehouseSchema);
export default Warehouse;
