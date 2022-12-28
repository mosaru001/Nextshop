import React from 'react'
import Bannerone from '../../components/home/Banner/coupon/one'
import Bannertwo from '../../components/home/Banner/coupon/two'
import Layout from '../../components/layouts/layout'
import Couponlist from '../../components/list/coupon-list'
import HeaderDropdownBreadcrumb from '../../components/layouts/header/header-dropdown-breadcrumb'
import Description from '../../components/descriptionPage'
const Coupon = () => {
  return (
    <>
      <div className='grid bg-white place-items-center'>
        <Layout>
          <HeaderDropdownBreadcrumb/>
          <Bannerone/>
          <Bannertwo/>
          <Couponlist/>
          <Description/>
          </Layout>
      </div>
    </>
  )
}

export default Coupon