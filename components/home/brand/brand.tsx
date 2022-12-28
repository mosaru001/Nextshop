import Image from 'next/image'

const Brand = () => {
	const image1 = '/images/brand/MStamp.jpg'
	const image2 = '/images/brand/sme.jpg'
	const image3 = '/images/brand/1free1xd.jpg'
	const image4 = '/images/brand/true.jpg'
	const image5 = '/images/brand/supersell.jpg'
	const image6 = '/images/brand/garnier.jpg'
	const image7 = '/images/brand/0percent.jpg'
	const image8 = '/images/brand/unilever.jpg'
	const image9 = '/images/brand/greatvalue.jpg'
	const image10 = '/images/brand/seemore.jpg'
	return (
		<div className='container grid grid-cols-5 mx-auto mt-8  justify-items-center'>
			<div>
				<Image src={image1} alt='' className='' width={240} height={241} />
				<Image src={image2} alt='' className='' width={240} height={241} />
			</div>
			<div>
				<Image src={image3} alt='' className='' width={240} height={241} />
				<Image
					src={image4}
					alt=''
					className=''
					width={240}
					height={241}
					priority={false}
				/>
			</div>
			<div>
				<Image src={image5} alt='' className='' width={240} height={241} />
				<Image src={image6} alt='' className='' width={240} height={241} />
			</div>
			<div>
				<Image src={image7} alt='' className='' width={240} height={241} />
				<Image src={image8} alt='' className='' width={240} height={241} />
			</div>
			<div>
				<Image src={image9} alt='' className='' width={240} height={241} />
				<Image src={image10} alt='' className='' width={240} height={241} />
			</div>
		</div>
	)
}

export default Brand
