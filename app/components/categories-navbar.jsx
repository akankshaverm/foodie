import categoryModel from "@/models/categoryModel";
import DbConnect from "@/utils/DbConnect";
import Link from "next/link"



const CategoryItem = ({Icon,label,id}) => {
  
    return(
        <Link href={id?`/${id}` : "/"} className="flex flex-1 px-3  justify-center items-center gap-2 box-border py-2  hover:bg-orange-500 hover:text-white ">
            {/*<Icon className=" w-4 h-4 text-red-500"/>*/}
            <h5 className=" text-lg  capitalize font-medium">{label}</h5>

        </Link>
    )
}

const CategoriesNavbar = async () => {
  DbConnect();
  const categories = await categoryModel.find({}).limit(5);
  return (
    <div className=" flex border-y  border-orange-600 divide-x-2 divide-orange-600">
        {categories.map((cat,i) => <CategoryItem key={i} label={cat.catname} id={cat._id}/>)}
        <CategoryItem label = "All"/>
    </div>
  )
}
export default CategoriesNavbar