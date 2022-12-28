import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/images/nav/logo.png";
import Banner from "../public/images/nav/nav-promotion.jpg"
import SearchIcon from '../components/icons/header/search-icon'
import { HeaderData } from '../data/navbar-data'
import { Menu } from '@headlessui/react'
import { HamburgerData } from '../data/hamburger-data'


const searchProductHandler = (event: any) => {
    event.preventDefault()
}

export default function Navbar(): any {
    return (
        <div className="max-w-screen w-full font-Athiti bg-white item-center lg:visible z-0">
            <div className="">
                <Link
                    href="/about"
                    className="overflow-hidden bg-no-repeat bg-cover "
                    legacyBehavior>
                    <Image
                        src={Banner}
                        alt="Banner"
                        className="w-full bg-fixed opacity-100 hover:opacity-80 transition duration-300 ease-in-out bg-white "
                    />
                </Link>
            </div>
            <div className="w-full flex text-black text-s px-20 mr-0 md:w-md">
                <div className="w-max">
                    <div className="w-max flex">
                        <div className="w-fit flex">
                            <Link
                                href="/about"
                                className="bg-slate-100 text-blue-900 border-4 border-transparent hover:text-black"
                                legacyBehavior>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-flex w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                                &nbsp;<b>ติดต่อสอบถาม 1371</b>&nbsp;
                            </Link>
                        </div>
                        <div className="w-full flex-1 grow mx-80 mx-100% md:mx-60 invisible md:visible">

                        </div>
                        <div className="bg-slate-100 text-blue-900 ml-36 border-4 border-transparent hover:text-black">
                            <Link href="/about" legacyBehavior>
                                <b>ติดตามสถานะการสั่งซื้อ</b>
                            </Link>
                        </div>
                        <div className=" bg-slate-300 text-blue-900 ml-2 border-4 border-transparent hover:text-black">
                            <Link href="/about" legacyBehavior>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-flex text-center w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg>
                                <b>เข้าสู่ระบบ | สมัครสมาชิก</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-2 items-center w-fit ml-10 px-5">
                <Link href="/" legacyBehavior>
                    <Image
                        src={Logo}
                        alt="logo"
                        className="items-center p-2"
                    />
                </Link>
                <div className="ml-16">
                    <div className='w-full grid-rows mt-2'>
                        <div className="inline-grid w-auto ">
                            <form onSubmit={searchProductHandler} className='w-auto'>
                                <input
                                    type='text'
                                    placeholder='ค้นหาชื่อสินค้าหรือแบรนด์'
                                    className='bg-transparent text-black text-mono w-96 h-5 px-5 border-1 focus:outline-none '
                                />

                            </form>
                        </div>
                        <div className="inline h-1 border-gray-200 border-2 ml-2">

                        </div>
                        <div className="inline-grid w-fit  ">
                            <Menu>
                                <Menu.Button className={'text-black mr-2 px-2 rounded-lg'}>หมวดหมู่ทั้งหมด <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1" className="inline w-3 h-2 fill-black rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                                </Menu.Button>
                                <Menu.Items className={'absolute pl-6 border-2 border-black overflow-y-auto h-72 origin-top-left w-fit px-2 py-1 divide-y grid divide-gray-100 round-md bg-white shadow-lg text-black z-40'}>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href={`/`} className='hover:bg-gray-200 z-50 ' >
                                                หมวดหมู่ทั้งหมด
                                            </Link>
                                        )}
                                    </Menu.Item>


                                    {HamburgerData.map(item => (

                                        <Menu.Item>
                                            {({ active }) => (
                                                <Link href={`${item.href}`} className='hover:bg-gray-200 z-50 ' legacyBehavior>
                                                    {[item.title]}

                                                </Link>
                                            )}
                                        </Menu.Item>
                                    ))}

                                </Menu.Items>
                            </Menu>
                        </div>

                        <button type='submit'>
                            <SearchIcon />
                        </button>

                    </div>
                    <div className="">
                        <hr className="h-1 bg-gray-200 border-0 m-0 " />
                    </div>

                    <div className=' flex  mt-2'>
                        {HeaderData.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className='inline-flex grow text-slate-900 hover:text-black hover:underline text-xs'
                                >
                                    <Link href={data.href} legacyBehavior>{data.content}</Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex ml-10">
                    <div className="inline-flex ml-5  w-fit">
                        <div className="table-column mt-2 text-black stroke-black hover:text-green-400 hover:stroke-green-400">
                            <div className="grid justify-items-center">
                                <Link href="/about" legacyBehavior>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" className="w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
                                </Link>
                            </div>
                            ตะกร้าสินค้า
                        </div>
                    </div>
                    <div className="inline-flex mr-auto w-fit">
                        <div className="table-column mt-2 mx-5 text-black stroke-black items-center hover:text-green-400 hover:stroke-green-400">
                            <div className="grid justify-items-center">
                                <Link href="/about" legacyBehavior>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" className="justify-center w-10 h-10">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </Link>
                            </div>
                            สินค้าโปรด
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full grid">
                <div className="w-full flex text-xl gap-1 bg-green-600 justify-self-center mx-1 px-2 md:text-lg">
                    <div className="grid grow"></div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">สินค้าขายดี                                </Link></div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">                                    สินค้าโปรโมชั่น                                </Link>                            </div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">                                    สินค้ามาใหม่                                </Link>                            </div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">                                    รวมคูปองส่วนลด                                </Link>                            </div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">                                    Flash Sale                                </Link>                            </div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">                                    ผ่อน 0 %                                </Link>                            </div>
                    <div className="grid grow bg-green-600 text-center hover:underline ">                                <Link href="/about" className="p-1 place-content-center">                                    OUTLET ลดล้างสต็อก                                </Link>                            </div>
                    <div className="grid grow"></div>
                </div>
            </div>
        </div>
    );
}
