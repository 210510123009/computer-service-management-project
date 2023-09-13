import express from "express";
import { createService, deleteService, getService } from "../controllers/serviceController.js";

//router object
const router = express.Router();

//post create service
router.post('/create-service', createService);

//get all service detail
router.get('/get-all-service', getService);

//delete service
router.delete('/deleteservice', deleteService);

export default router;