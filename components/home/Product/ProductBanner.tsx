import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'
// import SlidePrev from "../../icons/teaser/prev-btn"
// import SlideNext from "../../icons/teaser/next-btn"
import Product1 from "../../public/images/ProductBanner/images1.jpg"
import Product2 from "../../../public/images/ProductBanner/images2.jpg"
import Product3 from "../../../public/images/ProductBanner/images3.jpg"
// import Slideshow1 from "../../../public/images/ProductBanner/imageS1.jpg"
// import Slideshow2 from "../../../public/images/ProductBanner/imageS2.jpg"
// import Slideshow3 from "../../../public/images/ProductBanner/imageS3.jpg"
// import Slideshow4 from "../../../public/images/ProductBanner/imageS4.jpg"
// import Slideshow5 from "../../../public/images/ProductBanner/imageS5.jpg"
// import Slideshow6 from "../../../public/images/ProductBanner/imageS6.jpg"
// import Slideshow7 from "../../../public/images/ProductBanner/imageS7.jpg"
// import Slideshow8 from "../../../public/images/ProductBanner/imageS8.jpg"


let count = 0

function ProductBanner() {

	// const slideImages = [
	// 	'/images/ProductBanner/images1.jpg',
	// 	'/images/ProductBanner/imagesS1.jpg',
	// 	'/images/ProductBanner/imagesS2.jpg',
	// 	'/images/ProductBanner/imagesS3.jpg',
	// 	'/images/ProductBanner/imagesS4.jpg',
	// 	'/images/ProductBanner/imagesS5.jpg',
	// 	'/images/ProductBanner/imagesS6.jpg',
	// 	'/images/ProductBanner/imagesS7.jpg',
	// 	'/images/ProductBanner/imagesS8.jpg',
	// ]

	// const [currentIndex, setCurrentIndex] = useState(0)

	// const handleOnNextClick = () => {
	// 	count = (count + 1) % slideImages.length
	// 	setCurrentIndex(count)
	// }
	// const handleOnPrevClick = () => {
	// 	const image = slideImages.length
	// 	count = (currentIndex + image - 1) % image
	// 	setCurrentIndex(count)
	// }

	return (
        <div className="mt-2 text-black">
			{/* <div className=" mx-0 ">
				ลดอย่างแรง
				<div className="inline float-right">
					<Link href="/" className="float-right"> ดูเพิ่มเติม >> </Link>
				</div>
				<hr className=" h-1 bg-green-700  m-0  " /> */}

			{/* <div className='max-w-screen-xl '>
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
				</div> */}

			<div className="flex flex-row ">

				<div><Link href="fhs;" legacyBehavior><Image src={Product2} alt="Product2" className='img-main z-0 h-max ' width={600} height={300} /></Link></div>

				<div><Link href="fhs;" legacyBehavior><Image src={Product3} alt="Product3" className='img-main z-0 h-max  ' width={600} height={300} /></Link></div>


			</div>


		</div>
    );
}

export default ProductBanner