import SidebarIcons from '@/app/components/sidebar-icon'
import React from 'react'
import RecipeForm from './recipe-form'

const page = () => {
  return (
    <div className=' flex flex-1 h-screen'>
      <SidebarIcons/>
      <div className=' flex flex-1 justify-center items-center'>
        <RecipeForm/>
      </div>
      
    </div>
  )
}

export default page
