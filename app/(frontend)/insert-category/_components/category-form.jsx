import categoryModel from "@/models/categoryModel";
import DbConnect from "@/utils/DbConnect";
import { redirect } from "next/navigation";


const CategoryForm = () => {

    const handleInsertCategory = async (formData) => {
        "use server";

        let data = {
            catname: formData.get('categoryName'),
            catDescription: formData.get('categoryDescription')
        }
        DbConnect();
        let created = await categoryModel.create(data);

        redirect("/insert-category");
    }
  return (
    <div>
        <form action={handleInsertCategory} method="post">
            <div className="mb-3">
                <label htmlFor="categoryName" className='form-label'>Category Name</label>
                <input type="text" className=' border w-full px-3 py-2 rounded' id='categoryName' name='categoryName' />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoryDescription" className='form-label'>Category Description</label>
                    <textarea rows="5"  className=' border w-full px-3 py-2 rounded' id='categoryDescription' name='categoryDescription'></textarea>
                </div>
            <button type='submit' className=' bg-teal-500 hover:bg-teal-800 text-white px-3 py-2 rounded'>Add Category</button>
        </form>
      
    </div>
  )
}

export default CategoryForm
