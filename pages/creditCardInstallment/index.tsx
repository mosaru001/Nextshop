import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Credit from '../../components/home/Banner/credit'
import ProductSlide from "../../components/home/Product/ProductSlide";
import Layout from '../../components/layouts/layout'
import HeaderDropdownBreadcrumb from '../../components/layouts/header/header-dropdown-breadcrumb'
const CreditCardInstallment = () => {
  return (
    <>
      <div className='bg-white'>
        <Layout>
          <HeaderDropdownBreadcrumb />
          <div className='items-center mx-5'>
            <div className='text-3xl text-black text-center my-5 text-green-700'>
              ผ่อนชำระ 0% นานสูงสุด 10 เดือน
            </div>
            <hr className='h-2 bg-green-600 w-full' />
            <div>
              <Credit/>
              <Image src="/images/Banner/0condition.jpg" alt = "" width={1200} height={1000} className=""/>
            </div>
            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                สินค้าแนะนำ
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>

            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                เครื่องใช้ไฟฟ้าในบ้าน
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">สินค้าทั้งหมด &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>
            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                สมาร์ทโฟน แก็ตเจ็ต และอุปกรณ์เสริม
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">สินค้าทั้งหมด &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>
            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                สินค้าไอที กล้องและอิเล็กทรอนิกส์
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">สินค้าทั้งหมด &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

            </div>
            <div className="text-black my-2 items-end ">
              <div className="inline text-2xl">
                สินค้าบ้านและสวน
              </div>

              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">สินค้าทั้งหมด &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />

              <ProductSlide />

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
                บ้านและสวน สัตว์เลี้ยง
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

export default CreditCardInstallment