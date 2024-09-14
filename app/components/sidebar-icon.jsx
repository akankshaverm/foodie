
import Link from "next/link";
import { HiBeaker, HiBookOpen, HiHeart, HiHome, HiListBullet} from "react-icons/hi2";
const SidebarIcons = () => {
  return (
    <div className=' h-screen bg-slate-100 flex flex-col  items-center justify-center w-[50px] gap-7'>

        <Link href=" insert-recipe" title=" Insert New Dish"> 
        <HiListBullet  className=" w-7 h-7"/>
        </Link>

        <Link href="/insert-category" title="Insert New Categories">
        <HiHeart className=" w-7 h-7" />
        
        </Link>
        <Link href="/" title="Insert New Categories">
        <HiHome className=" w-7 h-7 text-red-500" />
        
        </Link>
        <Link href="" title="Manage Categories">
        <HiBeaker className=" w-7 h-7" />
        
        </Link>
        <Link href="manage-recipe" title="Manage Recipe">
        <HiBookOpen className=" w-7 h-7" />
        
        </Link>
       
        
      
    </div>
  )
}

export default SidebarIcons
