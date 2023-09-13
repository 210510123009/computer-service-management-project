import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

//POST register
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no. is Required" });
    }

    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//get user controller
export const getalluser = async (req, res) => {
  try {
    const allusers = await userModel.find();
    res.send({data : allusers})
    
  } catch (error) {
    console.log(error)
  }
};

//get single user controller
export const getsingleuser = async(req,res) => {
  try {
    const {email} = req.body
    const user = await userModel.findOne({email})
    res.send({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      }
    })
  } catch (error) {
    console.log(error)
  }
}

//delete user controller
export const deleteUser = async (req, res) => {
  const {id, name, email} = req.body;
  try {
    userModel.deleteOne(
      {email}, function(err,res){
        console.log(err);
      }
    );
    res.send({ status:'ok', data: 'deleted'});
  } catch (error) {
    console.log(error)
  }
}

//update password controller
export const updatePassword = async(req,res) => {
  try {
    const {email,oldpassword, newpassword} = req.body;
    if(!oldpassword){
      res.status(400).send({error : 'old password is required'});
    }
    if(!email){
      res.status(400).send({error : 'email is required'});
    }
    if(!newpassword){
      res.status(400).send({error : 'new password is required'});
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await comparePassword(oldpassword, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const hashed = await hashPassword(newpassword);
    await userModel.findByIdAndUpdate(user._id,{password:hashed})
    res.status(501).send({
      success:true,
      message:'password updated succesfully',
    })

  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "password not update",
      error,
    })
  }
}

//update profile controller
export const updateprofile = async(req,res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no. is Required" });
    }

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const updateFields = {};
      if(name){
        updateFields.name = name;
      }
      if(phone){
        updateFields.phone = phone;
      }
    const updatedUser = await userModel.findByIdAndUpdate(user._id, updateFields);

    await updatedUser.save();
    res.status(201).send({
      success: true,
      message :"user update successfully",
      updatedUser
    })
    
  } catch (error) {
    res.status(500).send({
          success:false,
          message:'something went wrong'
        })
  }
  // try {
  //   const {email,name,phone} = req.body

  //   const user = userModel.findOne({email})
  //   if(!user){
  //     return res.status(404).send({
  //       success: false,
  //       message: "Email is not registerd",
  //       user:user
  //     });
  //   }

  //   if (!name && !phone) {
  //     return res.status(400).send({
  //       success: false,
  //       message: "At least one of 'name' or 'phone' is required for the update.",
  //     });
  //   }

  //   if(name || phone){
  //     const updateFields = {};
  //     if(name){
  //       updateFields.name = name;
  //     }
  //     if(phone){
  //       updateFields.phone = phone;
  //     }
  //     const updatedUser = await userModel.findByIdAndUpdate(user._id, updateFields);
  //     return res.status(501).send({
  //       success:true,
  //       message:'name and phone updated',
  //       user: updatedUser
  //     })
  //   }

  //   if(name){
  //     const updatedUser = await userModel.findByIdAndUpdate(user._id,{name:name})
  //     return res.status(501).send({
  //       success:true,
  //       message:'name updated',
  //       user: updatedUser
  //     })
  //   }
  //   if(phone){
  //     const updatedUser = await userModel.findByIdAndUpdate(user._id,{phone:phone})
  //     return res.status(501).send({
  //       success:true,
  //       message:'phone updated',
  //       user: updatedUser
  //     })
  //   }

  // } catch (error) {
  //   res.status(500).send({
  //     success:false,
  //     message:'something went wrong'
  //   })
  // }
}

//test controller
export const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

//auth user controller
export const authUserController = (req, res) =>{
  res.status(200).send({
    ok: true});
};
