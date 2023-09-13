import serviceModel from "../models/serviceModel.js";

export const createService = async (req, res) =>{
    try {
        const {name, detail, price} = req.body;
        if(!name){
            return res.send({ message: "name is Required" });
        }
        if(!detail){
            return res.send({ message: "detail is Required" });
        }
        if(!price){
            return res.send({ message: "price is Required" });
        }

        const existingService = await serviceModel.findOne({ name });
        if (existingService) {
            return res.send({ message: "Service with the same name already exists" });
        }

        const service = await new serviceModel({
            name,
            detail,
            price,
        }).save();

        res.status(201).send({
            success: true,
            message: "service created succesfully",
            service,
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

export const getService = async (req,res) =>{
  try {
    const allservice = await serviceModel.find();
    res.send({data : allservice})
    
  } catch (error) {
    console.log(error)
  }
}

export const deleteService = async(req,res) =>{
    const {id, name} = req.body;

  try {
    serviceModel.deleteOne(
      {id}, function(err,res){
        console.log(err);
      }
    );
    res.send({ status:'ok', data: 'deleted'});
  } catch (error) {
    console.log(error)
  }
}