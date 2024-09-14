import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    catname : {type:String,required:true},
    catDescription : {type:String,required:true}
})



export default mongoose.models.Category || mongoose.model("Category",CategorySchema);