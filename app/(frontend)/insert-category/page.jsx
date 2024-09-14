import SidebarIcons from '@/app/components/sidebar-icon'
import React, { Suspense } from 'react'
import CategoryForm from './_components/category-form'
import CategoryHeader from './_components/category-header'
import CategoryCalling from './_components/category-calling'

const page = () => {
  return (
    <div className=' flex flex-1 h-screen'>
      <SidebarIcons/>
      <div className=' flex flex-1 flex-col p-10'>
        <CategoryHeader/>
        <div className=' flex flex-1'>
        <div className="w-3/12">
        <CategoryForm/>
        </div>
        <div className='w-9/12'>
        <Suspense fallback={<h2>Loading Categories...</h2>}>
        <CategoryCalling/>
        </Suspense>

        </div>
        </div>

      </div>
      
    </div>
  )
}

export default page
