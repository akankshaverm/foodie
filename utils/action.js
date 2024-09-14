import orderModel from "@/models/orderModel";
import DbConnect from "./DbConnect"
import { redirect } from "next/navigation";

 export const HandleOrderInsertion = async (formData) => {

    "use server"
     const data = {
        "dishId" : formData.get("dishId"),
    }

    //insertion
    DbConnect();

    //check if already exists

    const exist = await orderModel.findOne({ dishId:formData.get("dishId")});

    if(exist){
        const updated = await orderModel.findByIdAndUpdate(exist._id,{qty:exist.qty + 1});
    }
    else{
        const updated = await orderModel.create(data);
    }
redirect("/");
}

export const HandleOrderminus = async (formData) => {

    "use server"
     const data = {
        "dishId" : formData.get("dishId"),
    }

    //insertion
    DbConnect();

    //check if already exists

    const exist = await orderModel.findOne({ dishId:formData.get("dishId")});

    if(exist){
        if(exist.qty > 1) await orderModel.findByIdAndUpdate(exist._id, {qty: exist.qty - 1});
        else await orderModel.findByIdAndDelete(exist._id);
       
    }
    
redirect("/");
}

export const handleOrderItemDelete = async (formData) => {
    "use server"
    const orderId = formData.get("orderId");

    //deletion
    DbConnect();
     await orderModel.findByIdAndDelete(orderId);
    redirect("/");
}