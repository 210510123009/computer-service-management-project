import bookingModule from "../models/bookingModule.js";
import userModel from "../models/userModel.js";

export const createbooking = async (req,res) => {
    try {
        const {userid, email, service, price, date, message} = req.body;
        if(!userid){
            return res.send({ error: "userid is Required" });
        }
        if(!email){
            return res.send({ error: "email is Required" });
        }
        if(!service){
            return res.send({ error: "service name is Required" });
        }
        if(!price){
            return res.send({ error: "price is Required" });
        }
        if(!date){
            return res.send({ error: "date is Required" });
        }
        if(!message){
            return res.send({ messagerror: "message is Required" });
        }
       

        // const existingbooking = await bookingModule.findOne({ userid,service });
        // if (existingService) {
        //     return res.send({ message: "Service with the same name already exists" });
        // }

        const book = await new bookingModule({
            userid,
            email,
            service,
            price,
            date,
            message,
          }).save();

        res.status(201).send({
            success: true,
            message: "booked succesfully",
            book,
          });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            Message:'Error in creating service'
        })
    }
}

export const getallbooking = async (req, res) => {
    try {
        const allbooking = await bookingModule.find();
        res.send({data : allbooking})
        
      } catch (error) {
        console.log(error)
      }
}

export const userbooking = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await userModel.findOne({email})
        const booking = await bookingModule.find({id:user._id})
    } catch (error) {
        console.log(error)
    }
}

export const getsinglebookingdetail = async(req,res) => {
    const {id} = req.body
    try {
        const booking = await bookingModule.findById({})
        res.send({
            data : booking
        })
    } catch (error) {
        console.log(error)
    }
}

export const updatestatus = async(req,res) =>{
    const {id,status} = req.body

    if(!id){
        res.status(404).send({ error : 'id is required'})
    }
    if(!status){
        res.status(404).send({ error : 'status is required'})
    }

    const booking = await bookingModule.findById({id})
    if(!booking){
        res.status(404).send({
            success:false,
            message:'booking not found'
        })
    }

    const newbooking = await bookingModule.findByIdAndUpdate(id,{status:status})
    res.status(501).send({
      success:true,
      booking:newbooking
    })
}

export const deletebooking =async(req, res) =>{
    const {id, name} = req.body;

    try {
      bookingModule.deleteOne(
        {id}, function(err,res){
          console.log(err);
        }
      );
      res.send({ status:'ok', data: 'deleted'});
    } catch (error) {
      console.log(error)
    }
}