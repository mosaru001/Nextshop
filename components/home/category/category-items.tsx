import React from 'react'
import Image from 'next/image'
// import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'


const CategoryItems = (props:any) => {

	return (
		<div className='container grid grid-cols-12 md:gap-10 mx-auto flex justify-between inline-flex pb-1'>
			<div className='md:col-span-2 col-span-12 space-y-12 flex flex-col'>
				<Link href='/product/123'>
					<a className='text-black text-lg font-semibold pt-2'>
						{/* <Image
							src={props.image}
							alt='item-scott'
							className='w-full border border-gray-200'
							width={200}
							height={200}/> */}
						
						สก๊อตต์คลีนแคร์ 24 ม้วน
						
					</a>
					
				</Link>
				<a className='text-red-500 text-lg font-semibold text-end pt-1'>
					฿ 288
					</a>
			</div>
			
		</div>
	)
}

export default CategoryItems
