import categoryModel from '@/models/categoryModel';
import DbConnect from '@/utils/DbConnect'


const CategoryCalling = async () => {
    DbConnect();
    const category = await categoryModel.find({});
  return (
    <div>
        
        <table className=' border w-full bg-white'>
            <thead>
                <tr>
                    <th className='border p-3'>Id</th>
                    <th className='border p-3'>Category Name</th>
                    <th className='border p-3'>Category Description</th>
                    <th className='border p-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {category.map((cat,i) =>(
                    <tr key={i} className='text-center'>
                        <td className='border p-3'>{i+1}</td>
                        <td className='border p-3'>{cat.catname}</td>
                        <td className='border p-3'>{cat.catDescription}</td>
                        <td className='border p-3'></td>
                    </tr>

                ))}

            </tbody>

        </table>
        
      
    </div>
  )
}

export default CategoryCalling
