import React, { Suspense } from 'react'

import DbConnect from '@/utils/DbConnect'
import recipeModel from '@/models/recipeModel'
import SidebarIcons from '@/app/components/sidebar-icon';
import MainContainer from '@/app/components/main-container';
import OrderContainer from '@/app/components/order-container';
import LoadingUI from '@/app/components/loadingUi';
import { Login } from '@/app/components/login';
import { auth } from '@/auth';

const page =  async({params}) => {

  const sesion = await auth();
  DbConnect();

  const {catid} = params;
  let callingDish;
  

  if(!catid ){
   callingDish = await recipeModel.find().populate('dishcategory');
  }
  else{
    callingDish = await recipeModel.find({dishcategory:catid}).populate('dishcategory');

  }
  return (
    <div className=" flex flex-1 h-screen">
      {!sesion && <Login />}

      {sesion && (
        <>
          <SidebarIcons />
          <Suspense fallback={<LoadingUI />}>
            <MainContainer callingDish={callingDish} />
          </Suspense>
          <Suspense fallback={<LoadingUI />}>
            <OrderContainer />
          </Suspense>
        </>
      )}
    </div>
  );
}

export default page
