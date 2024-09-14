import { HandleOrderInsertion, handleOrderItemDelete, HandleOrderminus } from "@/utils/action";
import { MdClose } from "react-icons/md";

const OrderCard = ({order}) => {
  return (
    <div className=" flex gap-2 bg-white rounded-2xl border">
        <div className=" p-2">
            <img src={`/food-img/${order.dishId.image}`} className=" w-[50px] h-[50px] rounded-xl" alt="" />

        </div>
        <div className=" flex-1 flex flex-col gap-2 p-3 ">
            <div className="flex items-start  justify-between">
                <h2 className="text-xl font-semibold">{order.dishId.dishname}</h2>
                <h2 className="text-xs">{order.dishId.price}x{order.qty}={order.qty*order.dishId.price}</h2>
            </div>
        <div className=" flex ">
            <form action={handleOrderItemDelete} method="post">
                <input type="hidden" name="orderId" value={order._id} />
                <button type="submit">
                    <MdClose className=" h-7 w-7" />
                    </button>

            </form>
            <span className=" flex gap-2 items-center">
            <form action={HandleOrderminus} method="post">
                <input type="hidden" name="dishId" value={order.dishId._id} />
                <input type="submit" className="bg-red-700 text-xl text-white px-2 py-1  rounded" value="-"/>
            </form>
                <span className=" text-xl font-semibold">{order.qty}</span>
            <form action={HandleOrderInsertion} method="post">
                <input type="hidden" name="dishId" value={order.dishId._id} />
                <input type="submit" className="bg-teal-700 text-xl text-white px-2 py-1 rounded" value="+"/>
            </form>
            </span>
        </div>

        </div>
      
    </div>
  )
}

export default OrderCard