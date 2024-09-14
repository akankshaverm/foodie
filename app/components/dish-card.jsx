import { HandleOrderInsertion } from "@/utils/action"


const DishCard = ({image,label,price,category,id}) => {
  return (
    <div className=" flex flex-col gap-3">
        <img src={`/food-img/${image}`} alt="" width="100%"   className=" rounded-xl h-[160px] "  />
        <div className=" flex justify-between">
            <h2 className=" text-xl font-bold">{label}</h2>
            <h3 className=" text-lg font-semibold ">₹{price}/-</h3>

        </div>
        <div className="flex capitalize items-center justify-between ">
            <p>{category}</p>

            <form action={HandleOrderInsertion} method="post">
              <input type="hidden" value={id} name="dishId" />
              <input type="submit" value="Add" className="bg-teal-700 text-white px-3 py-2 rounded-lg" />
            </form>


        </div> 

       
    </div>
  )
}

export default DishCard