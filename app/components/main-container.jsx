
import AdsBanner from "./ads-banner"
import CategoriesNavbar from "./categories-navbar"
import DishContainer from "./dish-container"
import SearchBox from "./search-box"

const MainContainer = ({callingDish}) => {
  return (
    <div className=" bg-white h-screen w-9/12 p-3">
        <div className=" flex flex-col gap-5">
            <SearchBox/>
            <AdsBanner/>
            <CategoriesNavbar/>
            
            <DishContainer callingDish={callingDish}/>
        
            
            


        </div>
    </div>
  )
}

export default  MainContainer