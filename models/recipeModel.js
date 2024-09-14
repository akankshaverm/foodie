import mongoose from "mongoose";
import categoryModel from "./categoryModel";

const RecipeSchema = mongoose.Schema({
    dishname:{type:String,required:true},
    dishcategory:{type:mongoose.Types.ObjectId,required:true,ref:categoryModel},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    label:{type:String}
},
{
    timestamps:true

})

delete mongoose.models.recipe;


export default mongoose.models.Recipe || mongoose.model("Recipe",RecipeSchema);