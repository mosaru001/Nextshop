import React from 'react'
import Head from "next/head";
import Image from "next/image";
import Brand from "../components/bannerMain2";
import Link from "next/link";
import TopTeaser from "../components/bannerMain1";
import Layout from "../components/layouts/layout";
import Flashtimer from "../components/home/FlashSales/Title"
import ProductBanner from "../components/home/Product/ProductBanner";
import ProductslideBanner from "../components/home/Product/ProductBanner1";
import ProductSlide from "../components/home/Product/ProductSlide";
import Condition from "../public/images/condition_1200x120-188728-0.jpg"

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="px-5 py-5 bg-white">
          <Head>
            <div>
              ALL Online ห้างใกล้บ้าน โดย 7-Eleven ส่งฟรี 24 ชม. ที่เซเว่น
            </div>
            <meta name="description" content="Home Page of 7-11 Web app" />
          </Head>
          <TopTeaser />
          <Brand />
          <div className="inline mb-0">
            <Flashtimer />
            <div className="relative inline-grid float-right text-black z-10 ">
              <Link href="/flashsale" >ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-red-600 w-full" />
            <div className="mt-2">
              <ProductSlide />
            </div>
            <div className="flex justify-center ">
              <Image src={Condition} alt="Flashsale Condition" />
            </div>
          </div>
          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              ลดอย่างแรง
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href = "/Flastsale"  className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-2 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />

            <div className="mt-2">
              <div className="inline ">
                ลดอย่างแรง
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>

          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              ซูเปอร์มาร์เก็ต
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end  ">
            <div className="inline text-2xl">
              อาหารสด ผัก ผลไม้และเบเกอรี่
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              ความงามและของใช้ส่วนตัว
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              สุขภาพ
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              อุปกรณ์และของใช้ภายในบ้าน
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              แม่และเด็ก ผู้สูงอายุ
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              ไอทีและแก็ตเจ็ต
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              แฟชั่น
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              ผลิตภัณฑ์สำหรับสัตว์เลี้ยง
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>
          </div>

          <div className="text-black my-2 items-end ">
            <div className="inline text-2xl">
              หนังสือ อุปกรณ์สำนักงาน
            </div>

            <div className=" inline-flex float-right text-black ">
              <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
            </div>
            <hr className="h-1 bg-green-600 w-full" />
            <ProductslideBanner />
            <ProductBanner />
            <div className="mt-2">
              <div className="inline ">
                โปรโมชั่น
              </div>
              <div className=" inline-flex float-right text-black ">
                <Link href="/Flashsale" className="text-lg ">ดูเพิ่มเติม &gt;&gt;</Link>
              </div>
              <hr className="h-1 bg-green-600 w-full" />
              <ProductSlide />
            </div>


          </div>


        </div>
      </Layout>
    </>
  )
}

export default HomePage