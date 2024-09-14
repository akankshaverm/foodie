import categoryModel from '@/models/categoryModel';
import recipeModel from '@/models/recipeModel';
import DbConnect from '@/utils/DbConnect';
import { redirect } from 'next/navigation';
import React from 'react'
import{join} from "path";
import { writeFile } from 'fs/promises';



const RecipeForm = async () => {
    const categories = await categoryModel.find({});
    const handleInsertRecipe = async(formData)=>{
        "use server";
        
        //image work

        let image = formData.get("image");
        let bytes = await image.arrayBuffer();
        let buffer = Buffer.from(bytes);
        let path = join("./public","food-img",image.name);
        await writeFile(path,buffer);


        let data={
            dishname:formData.get('dishName'),
            dishcategory:formData.get('dishCategory'),
            image:formData.get("image").name,
            price:formData.get('price'),
            label:formData.get('label')
        }
        DbConnect();
        let create = await recipeModel.create(data);
        redirect("/");

    }


  return (
    <div className=' border'>
        <form action={handleInsertRecipe} method="post">
            <div className=' mb-3 flex flex-col'>
                <label htmlFor="dishName">Dish Name</label>
                <input type="text" name='dishName' className=' rounded border px-3 py-2' />

            </div>
            <div className=' mb-3 flex flex-col'>
                <label htmlFor="dishCategory">Dish Category</label>
                <select name='dishCategory' className=' rounded border px-3 py-2'>
                    <option value="">Select Categories</option>
                    {
                        categories.map((cat,i) => <option key={i} value={cat._id}>{cat.catname}</option>)
                    }
                </select>

            </div>
            <div className=' mb-3 flex flex-col'>
                <label htmlFor="image">Image</label>
                <input type="file" name='image' className=' rounded border px-3 py-2' />

            </div>
            <div className=' mb-3 flex flex-col'>
                <label htmlFor="price">Price</label>
                <input type="text" name='price' className=' rounded border px-3 py-2' />

            </div>
            <div className=' mb-3 flex flex-col'>
                <label htmlFor="label">label</label>
                <select name="label" id="label" className='rounded border px-3 py-2'>
                    <option value=""selected disabled>Selected Option</option>
                    <option value="Best Selling">Best Selling</option>
                    <option value="New Arrive">New Arrive</option>
                </select>
            </div>
            <button type='submit' className='bg-orange-700 text-white px-3 py-2 hover:bg-orange-900 rounded-lg'>Insert Dish</button>
        </form>
       
    </div>
  )
}

export default RecipeForm