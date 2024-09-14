import SidebarIcons from '@/app/components/sidebar-icon'
import React from 'react'
import CategoryForm from '../insert-category/_components/category-form'
import CategoryHeader from '../insert-category/_components/category-header'
import CategoryCalling from '../insert-category/_components/category-calling'
import RecipeCalling from '../insert-recipe/recipe-calling'

const page = () => {
  return (
    <div className=' flex flex-1 h-screen'>
      <SidebarIcons/>
      <div className=' flex flex-1 flex-col p-10'>
        <CategoryHeader/>
        <div className="flex flex-1 p-3">
          <RecipeCalling/>

        </div>
      </div>
      
    </div>
  )
}

export default page

