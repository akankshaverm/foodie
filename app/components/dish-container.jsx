import React, { Suspense } from 'react'
import DishCard from './dish-card'
import LoadingUI from './loadingUi';



const DishContainer =  ({callingDish}) => {
  
  console.log(callingDish);
  return (
    <div className=' overflow-y-scroll max-h-[300px] px-5 '>
        <div className=' grid grid-cols-3 gap-6'>
          <Suspense fallback={<LoadingUI/>}>

          {
            callingDish.map((dish,i) => <DishCard key={i} id={dish._id} label={dish.dishname} price={dish.price}
             category={dish.dishcategory?.catname} image={dish.image} />
          )
          }
          </Suspense>
        
        
      
    </div>
    </div>

    
  )
}

export default DishContainer