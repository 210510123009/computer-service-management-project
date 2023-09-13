import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true,
        },
        service: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: String,
            required: true,
            trim: true,
        },
        date:{
            type: String,
            required: true,
            trim: true
        },
        message:{
            type: String,
            required: true,
            trim: true
        },
        status:{
            type:Number,
            required:true,
            default:0
        }
    },
    {timestamps: true}
);

export default mongoose.model("bookings", bookingSchema);