import Image from 'next/image'
import Link from 'next/link'

import Logo from '../header/logo'
import { ServiceAoData } from '../../../data/footer-data'
import { AboutUsData } from '../../../data/footer-data'

const AoFooter = () => {
	return <>
        <div className='container grid grid-cols-12 md:gap-10 mx-auto mt-10 justify-items-center'>
            <div className='md:col-span-3 col-span-12 space-y-12 flex flex-col'>
                <ul>
                    <div className='mb-4 text-green-600  font-extrabold text-xl'>
                        บริการลูกค้า
                    </div>
                    {ServiceAoData.map((data, index) => {
                        return (
                            <li
                                key={index}
                                className='text-lg hover:scale-y-125 hover:text-gray-700 text-gray-600 '
                            >
                                <Link href={data.href} legacyBehavior>{data.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-12 relative bg-cover bg-no-repeat bg-center'>
                <ul>
                    <div className='mb-4 text-green-600  font-extrabold text-xl'>
                        เกี่ยวกับเรา
                    </div>
                    {AboutUsData.map((data, index) => {
                        return (
                            <li
                                key={index}
                                className='text-lg hover:scale-y-125 hover:text-gray-700 text-gray-600 '
                            >
                                <Link href={data.href} legacyBehavior>{data.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='xl:col-span-3 lg:col-span-4 md:hidden lg:block hidden'>
                <ul>
                    <div className='mb-4 text-green-600 font-extrabold text-xl'>
                        ดาวน์โหลดแอป 7-Eleven
                    </div>
                    <div className='inline-flex'>
                        <div className='w-full'>
                            <Image
                                src='/images/footer/qr/qr-seven.jpg'
                                alt='seven'
                                width={130}
                                height={130}
                            />
                        </div>
                        <div className='ml-2 w-full'>
                            <div className='mb-7'>
                                <Link
                                    href='https://apps.apple.com/th/app/7-eleven-th/id514262377?utm_source=weballonline&utm_medium=icon&utm_campaign=loadappstore'
                                    target='_blank'
                                    rel='noopener noreferrer'>

                                    <Image
                                        src='/images/footer/qr/app-store.jpg'
                                        alt='seven'
                                        width={131}
                                        height={47}
                                    />

                                </Link>
                            </div>
                            <div className='mt-7'>
                                <Link
                                    href='https://play.google.com/store/apps/details?id=asuk.com.android.app'
                                    target='_blank'
                                    rel='noopener noreferrer'>

                                    <Image
                                        src='/images/footer/qr/play-store.jpg'
                                        alt='seven'
                                        width={131}
                                        height={47}
                                    />

                                </Link>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
        <div className='text-center my-12'>
            <Logo />
        </div>
        <div className='h-1 bg-green-600' />
    </>;
}

export default AoFooter
