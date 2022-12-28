import Image from 'next/dist/client/image'
import React, { useState } from 'react'
import NextBtn from '../../icons/teaser/next-btn'
import PrevBtn from '../../icons/teaser/prev-btn'

let count = 0

const Slideshow = () => {
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

	return (
		<div className='max-w-screen-xl mx-auto'>
			<div className='w-full relative select-none mt-4'>
				<Image
					src={slideImages[currentIndex]}
					alt='.'
					className='img-main z-0'
					width={586}
					height={528}
				/>

				<div className='absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3'>
					<button onClick={handleOnPrevClick}>
						<PrevBtn />
					</button>
					<button onClick={handleOnNextClick}>
						<NextBtn  />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Slideshow
