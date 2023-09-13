import express from 'express'
import { createbooking, deletebooking, getallbooking, getsinglebookingdetail, updatestatus, userbooking } from '../controllers/bookingController.js';

const router = express.Router();

//post create booking
router.post('/create-booking', createbooking);

//get booking 
router.get('/get-all-booking', getallbooking);

//get user booking
router.get('/userbooking', userbooking);

//get single booking detail
router.get('/get-single-booking', getsinglebookingdetail)

//delete booking
router.post('/deletebooking', deletebooking)

//update status
router.post('/update-status', updatestatus)

export default router;

