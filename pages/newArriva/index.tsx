import React from 'react'
import FilterPrice from '../../components/home/Product/Rangeslider'
import FilterBrand from '../../components/home/Product/filterbrand'
import FilterColor from '../../components/home/Product/filtercolor'
import Layout from '../../components/layouts/layout'
import HeaderDropdownBreadcrumb from '../../components/layouts/header/header-dropdown-breadcrumb'
import New from '../../components/home/Banner/new'
import Productlist from '../../components/list/product-list '
const NewArriva = () => {
  return (
    <>
      <div className='bg-white inline-grid'>
        <Layout>
          <HeaderDropdownBreadcrumb />
          <div className='grid'>
            <FilterPrice />
            <FilterBrand />
            <FilterColor />
          </div>
          <div className='inline'>
            <New />
          </div>
          <div>
            <Productlist/>
          </div>

        </Layout>
      </div>
    </>
  )
}

export default NewArriva