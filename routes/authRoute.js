import express from "express";
import {
  registerController,
  loginController,
  testController,
  authUserController,
  getalluser,
  deleteUser,
  updatePassword,
  updateprofile,
  getsingleuser
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);


//LOGIN || POST
router.post("/login", loginController);


//get all User Detail
router.get("/get-all-users", getalluser)


//get single User Detail
router.post("/get-single-user", getsingleuser)


//delet user
router.post("/deleteuser", deleteUser)


//update password
router.post("/update-password", updatePassword)


//update profile
router.post('/update-profile', updateprofile)


//test routes
router.get("/test", requireSignIn, isAdmin, testController);


//Login User Authentication
router.get("/user-auth", requireSignIn, authUserController);

export default router;
