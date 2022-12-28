import React from 'react'
import FlashTitle from "../../components/home/FlashSales/Title"
import FlashBanner from "../../components/home/FlashSales/Banner"
import FlashTabs from "../../components/home/FlashSales/Tabs"
import Description from '../../components/descriptionPage'
import Layout from '../../components/layouts/layout'
import HeaderDropdownBreadcrumb from '../../components/layouts/header/header-dropdown-breadcrumb'
const Flashsale = () => {
  return (
    <div className='grid bg-white place-items-center '>
      <Layout>
      <HeaderDropdownBreadcrumb/>
      <FlashTitle />
      <div className='justify-center'> 
        <FlashBanner />
      </div>
      <div className='w-max static grid'>
         <FlashTabs /> 
      </div>
      <Description />
      </Layout>
    </div>
  )
}

export default Flashsale