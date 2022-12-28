import Image from 'next/image'

const ServiceFooter = () => {
	return (
		<div className='container grid grid-cols-12 md:gap-10 mx-auto mt-10 justify-items-center text-black'>
			<div className='md:col-span-6 col-span-12  flex flex-col'>
				<p className='mb-4 text-lg font-extrabold'>วิธีการชำระเงิน</p>
				<hr />
				<ul className='mt-4 inline-flex'>
					<li className='service-social'>
						<Image
							src='/images/footer/services/counterservice.png'
							alt='counter-icon'
							width={61}
							height={47}
						/>
					</li>
					<li className='service-social mt-3'>
						<Image
							src='/images/footer/services/visa.png'
							alt='counter-icon'
							width={76}
							height={26}
						/>
					</li>
					<li className='service-social'>
						<Image
							src='/images/footer/services/mastercard.png'
							alt='counter-icon'
							width={76}
							height={46}
						/>
					</li>
					<li className='service-social'>
						<Image
							src='/images/footer/services/truemoney.webp'
							alt='counter-icon'
							width={60}
							height={46}
						/>
					</li>
				</ul>
			</div>
			<div className='md:col-span-3 col-span-12 flex flex-col'>
				<p className='mb-4 text-lg font-extrabold'>
					บริการได้รับการตรวจสอบแล้ว
				</p>
				<hr />
				<ul className='mt-4 inline-flex'>
					<li className='service-social'>
						<Image
							src='/images/footer/services/ssl.png'
							alt='counter-icon'
							width={60}
							height={60}
						/>
					</li>
					<li className='service-social mt-1'>
						<Image
							src='/images/footer/services/dbd.png'
							alt='counter-icon'
							width={73}
							height={60}
						/>
					</li>
				</ul>
			</div>
			<div className='md:col-span-3 col-span-12 flex flex-col'>
				<p className='mb-4 text-lg font-extrabold'>สำหรับสมาชิก</p>
				<hr />
				<ul className='mt-1 inline-flex'>
					<li className='service-social'>
						<Image
							src='/images/footer/services/allmember.png'
							alt='counter-icon'
							width={73}
							height={73}
						/>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default ServiceFooter
