import express from 'express';
import { getAllWarehouses } from '../controllers/warehouseController.js';

const router = express.Router();

router.get('/', getAllWarehouses);

export default router;
