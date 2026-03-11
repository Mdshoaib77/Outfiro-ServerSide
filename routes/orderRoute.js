import express from "express";
import { allOrders, placeOrder, updateStatus, userOrders } from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin routes (protected)
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// User routes (protected)
// Place order using COD
orderRouter.post('/place', authUser, placeOrder);

// Get user's orders
orderRouter.post('/userorders', authUser, userOrders);

export default orderRouter;
