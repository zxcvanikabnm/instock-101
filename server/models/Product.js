import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: Number,
    productName: String,
    productDescription: String,
    orderedBy: String,
    lastOrdered: String,
    quantity: Number,
    categories: String,
    referenceNumber: String,
    location: String,
    status: String,
});

export default productSchema;
