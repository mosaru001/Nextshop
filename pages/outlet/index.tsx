import React from 'react'
import Link from 'next/link';
import OUTLET from '../../components/home/Banner/outlet'
import ProductSlide from "../../components/home/Product/ProductSlide";
import Layout from '../../components/layouts/layout'
import HeaderDropdownBreadcrumb from '../../components/layouts/header/header-dropdown-breadcrumb'
const Outlet = () => {
  return (
    <>
      <div className='bg-white'>
        <Layout>
          <HeaderDropdownBreadcrumb />
          <div className='items-center mx-5'>
            <div className='text-3xl text-black text-center my-5 text-green-700'>
              OUTLET ลดล้างสต็อก สินค้าราคาทุน
            </div>
            <hr className='h-2 bg-green-600 w-full' />
            <div>
              <OUTLET/> 
            </div>
            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                บ้านและสวน สัตว์เลี้ยง
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>

            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                เครื่องใช้ไฟฟ้า
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>
            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                ไอที,กล้อง & อิเล็กทรอนิค,หุ่นยนต์
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>

          </div>


        </Layout>
      </div>

    </>
  )
}

export default Outlet