import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NextBtn from './icons/teaser/next-btn'
import PrevBtn from './icons/teaser/prev-btn'
import { HamburgerData } from '../data/hamburger-data'

let count = 0
const Banner = () => {
    const slideImages = [
        '/images/mainTeaser/Image1.jpg',
        '/images/mainTeaser/Image2.jpg',
        '/images/mainTeaser/Image3.jpg',
        '/images/mainTeaser/Image4.jpg',
        '/images/mainTeaser/Image5.jpg',
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const handleOnNextClick = () => {
        count = (count + 1) % slideImages.length
        setCurrentIndex(count)
    }
    const handleOnPrevClick = () => {
        const image = slideImages.length
        count = (currentIndex + image - 1) % image
        setCurrentIndex(count)
    }

    return <>
        <div className='container w-max float-right flex justify-items-center z-0 px-2 h-fit mr-0'>
            <div className='flex '>
                <div className='max-w-screen-xl '>
                    <div className='flex w-fit relative select-none mt-4 overflow-hidden bg-no-repeat bg-cover'>
                        <Link href="/about" legacyBehavior>
                            <Image
                                src={slideImages[currentIndex]}
                                alt='.'
                                className='img-main h-max overflow-hidden bg-fixed opacity-100 hover:opacity-80 transition duration-300 ease-in-out bg-white hover:cursor-pointer'
                                width={586}
                                height={528}
                            />
                        </Link>


                        <div className='inline-flex absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3'>
                            <button onClick={handleOnPrevClick}>
                                <PrevBtn />
                            </button>
                            <button onClick={handleOnNextClick}>
                                <NextBtn />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid w-max ml-2 mt-3'>
                    <div className='grid-rows justify-items-center'>
                        <div className='grid justify-items-center '>
                            <Link href='/about' legacyBehavior>
                                <Image
                                    src='/images/ads/ads1.jpg'
                                    alt='ad1'
                                    className='m-1 '
                                    width={273}
                                    height={250}
                                />
                            </Link>
                        </div>
                        <div className='grid justify-items-center w-fit '>
                            <Link href='/about' legacyBehavior>
                                <Image
                                    src='/images/ads/ads2.jpg'
                                    alt='ad2 '
                                    className='m-1 '
                                    width={273}
                                    height={250}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Banner