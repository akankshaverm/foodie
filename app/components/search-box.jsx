import { BsList, BsSearch, IconName } from "react-icons/bs";

const SearchBox = () => {
  return (
    <div className='flex flex-1 shadow-md p-3 border'>
        <span className="  flex gap-3 flex-1">
            <BsSearch className=" w-5 h-5 text-slate-400"/>
            <input type="search" className=" flex-1 text-xl focus:outline-none focus:border-none" placeholder=" What would you like to eat?"></input>

            <BsList className=" w-6 h-6 text-slate-400"/>
        </span>
      
    </div>
  )
}

export default SearchBox
