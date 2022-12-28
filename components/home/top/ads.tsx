import Image from 'next/image'
const Ads = () => {
	return (
		<div>
			<div>
				<Image
					src='/images/ads/ads1.jpg'
					alt='ad1'
					className='mb-1 w-full'
					width={300}
					height={290}
				/>
			</div>
			<div className='mt-6'>
				<Image
					src='/images/ads/ads2.jpg'
					alt='ad2 '
					className='mt-1 w-full'
					width={300}
					height={290}
				/>
			</div>
		</div>
	)
}

export default Ads
