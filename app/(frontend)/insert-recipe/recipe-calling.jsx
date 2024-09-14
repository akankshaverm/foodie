import recipeModel from '@/models/recipeModel';
import DbConnect from '@/utils/DbConnect'
import React from 'react'

const RecipeCalling = async () => {
    DbConnect();
    const recipe = await recipeModel.find().populate("dishcategory");
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th className=' border p-3'>Id</th>
                    <th className=' border p-3'>Dish Name</th>
                    <th className=' border p-3'>Dish Category</th>
                    <th className=' border p-3'>Image</th>
                    <th className=' border p-3'>Price</th>
                    <th className=' border p-3'>Label</th>
                    <th className=' border p-3'>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                recipe.map((rec,i) => (
                <tr key={i}>
                    <td className=' border p-3'>{i+1}</td>
                    <td className='border p-3'>{rec.dishname}</td>
                    <td className='border p-3'>{rec.dishcategory?.catname}</td>
                    <td className='border p-3'>
                        <img src={`/food-img/${rec.image}`} alt="" width="50px" height="50px"/>
                    </td>
                    <td className='border p-3'>{rec.price}</td>
                    <td className='border p-3'>{rec.label}</td>
                    <td className='border p-3'></td>
                </tr>
                ))}

            </tbody>
        </table>
      
    </div>
  )
}

export default RecipeCalling