import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'
import SlidePrev from "../../icons/teaser/prev-btn"
import SlideNext from "../../icons/teaser/next-btn"

let count = 0
export default function ProductSlide1(): any {
    const slideImages = [
        '/images/ProductBanner/images1.jpg',
        '/images/ProductBanner/imagesS1.jpg',
        '/images/ProductBanner/imagesS2.jpg',
        '/images/ProductBanner/imagesS3.jpg',
        '/images/ProductBanner/imagesS4.jpg',
        '/images/ProductBanner/imagesS5.jpg',
        '/images/ProductBanner/imagesS6.jpg',
        '/images/ProductBanner/imagesS7.jpg',
        '/images/ProductBanner/imagesS8.jpg',
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
    return (
        <div className='max-w-screen-xl '>
            <div className='w-fit relative select-none mt-4 mx-0'>
                <Image
                    src={slideImages[currentIndex]}
                    alt='.'
                    className='img-main z-0 h-max '
                    width={1200}
                    height={250}
                />

                <div className='absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3'>
                    <button onClick={handleOnPrevClick}>
                        <SlidePrev />
                    </button>
                    <button onClick={handleOnNextClick}>
                        <SlideNext />
                    </button>
                </div>
            </div>
        </div>
        )

}