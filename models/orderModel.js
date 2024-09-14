import mongoose from "mongoose";
import recipeModel from "./recipeModel";


const OrderSchema = mongoose.Schema({
    dishId:{type:mongoose.Schema.Types.ObjectId,required:true,ref:recipeModel},
    qty:{type:Number,default:1}
},
{timestamps:true})

delete mongoose.models.recipe;


export default mongoose.models.Order || mongoose.model("Order",OrderSchema);
