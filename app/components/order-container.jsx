import React from 'react'
import { FcClock, IconName } from "react-icons/fc";
import OrderCard from './order-card';
import { FaLocationDot } from "react-icons/fa6";
import orderModel from '@/models/orderModel';
import { SignOut } from './signin';

const OrderContainer = async () => {
  const orderData = await orderModel.find({}).populate('dishId');
  let totalPrice = 0; 
  let totalTax = 0;
  return (
    <div className=' w-3/12 h-screen bg-slate-100 p-5'> 
      <div className='flex justify-between'>
      <h1 className=' text-2xl '>My Order</h1>
           <SignOut/>
      </div>


      <div className="flex gap-10 justify-start mt-2">
        <span className=' flex items-center gap-2'>
        <FcClock className=' w-6 h-6'/>
        <p>40 Mins</p>
        </span>
        <span className=' flex items-center gap-2'>
        <FaLocationDot  className=' w-6 h-6 text-red-500'/>
        <p>5 Km</p>
        </span>
        </div>

        <div className=' flex flex-col gap-3 mt-3 max-h-[350px] overflow-y-scroll px-3'>
          {
            orderData.map((order,index) => {

              totalPrice += order.dishId.price*order.qty;
              totalTax = totalPrice * 0.18;

              return ( <OrderCard key={index} order={order}/>)
            }
          )
          }
        </div>
        <div className="flex flex-col mt-5 bottom-0 fixed w-[280px]">
          <hr className=' border-2'/>
          <div className="flex justify-between mt-2 items-center text-slate-500 flex-1  gap-28">
            <h2 className=' text-lg font-semibold'>Sub Total</h2>
            <h2 className='font-bold'>₹{totalPrice}/-</h2>
          </div>
          <div className="flex justify-between mt-3 items-center text-slate-500 flex-1">
            <h2 className=' text-lg font-semibold'>TAX(GST 18%)</h2>
            <h2 className='font-bold'>₹{Math.round(totalTax)}/-</h2>
          </div>
          <hr className=' border-2 mt-2' />
          <div className="flex justify-between mt-3 items-center text-slate-500 flex-1">
            <h2 className=' text-xl font-semibold'>Sub Total</h2>
            <h2 className='font-bold'>₹{Math.ceil(totalPrice + totalTax)}/-</h2>
          </div>
          <a href="" className=' bg-orange-500 text-white px-3 py-2 rounded-lg mt-2 text-xl text-center hover:bg-orange-900'>Check Out</a>

        </div>
      </div>
  )
}

export default OrderContainer
