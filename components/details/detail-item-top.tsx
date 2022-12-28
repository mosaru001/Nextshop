import { useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import LeftArrow from '../icons/detail/left-arrow'
import RightArrow from '../icons/detail/right-arrow'
import Share from '../icons/detail/share'
import Heart from '../icons/detail/heart'
import Cart from '../icons/detail/cart'

const DetailItemTop = (props:any) => {
	const amountInputRef:any = useRef(1)

	const submitAmountHandler = (event:any) => {
		event.preventDefault()

		const enteredAmount = amountInputRef.current.value

		console.log(enteredAmount)
	}

	return (
        <div className='container mx-auto text-2xl'>
			<div className='grid grid-cols-3 color-detail mt-5 '>
				<Link href='/' className='inline-flex '>

                    <LeftArrow />
                    <span className='px-1'>กลับหน้ารวม</span>

                </Link>
				<Link href='/' className='inline-flex'>

                    <LeftArrow />
                    <span className='px-1'>ก่อนหน้านี้</span>

                </Link>
				<Link href='/' className='inline-flex'>

                    <span className='px-1 '>ถัดไป</span>
                    <RightArrow />

                </Link>
			</div>
			<div className='border-t-4 border-t-green-500 mt-4' />
			<div className='grid grid-cols-3 gap-4 mt-4'>
				<div>
					<p className='color-detail'>{props.Model}</p>
					<div className='border-2 border-gray-200 m-4'>
						<img src={props.image} alt='car-care' />
					</div>
					<div className='inline-flex m-4'>
						<button className='border-2 border-gray-200 focus:border-black hover:cursor-auto '>
							<img src={props.image2} alt='car-care' />
						</button>

						<button className='border-2 border-gray-200 ml-4 focus:border-black hover:cursor-auto'>
							<img src={props.image3} alt='car-care' />
						</button>
					</div>
				</div>
				<div>
					<p className='color-detail'>{props.productName}</p>
					<div className='inline-flex mb-4'>
						<span className='color-id'>{props.skuCode}</span>
						<span className='ml-2'>
							<Share />
						</span>
						<span className='border border-gray-200 rounded-full p-1 ml-4'>
							<Heart />
						</span>
					</div>
					<hr />
					<ol className='list-disc mt-4 color-detail ml-5'>
						<li>{props.title}</li>
					</ol>
				</div>
				<div>
					<p className='text-4xl text-red-600 mb-3'>฿ {props.price}</p>
					<hr />
					<form onSubmit={submitAmountHandler} className='flex flex-col'>
						<div className='inline-flex my-3'>
							<label>รวมยอดของ</label>
							<span>-</span>
							<input
								type='number'
								min={1}
								max={9999}
								ref={amountInputRef}
								defaultValue={1}
							/>
							<span>+</span>
							<span>มีสินค้าในสต๊อก</span>
						</div>

						<div className='inline-flex'>
							<button
								type='submit'
								className='inline-flex px-6 py-2.5 bg-yellow-500 text-white font-medium text-xl leading-tight rounded-lg '
							>
								<span>
									<Cart />
								</span>
								<span>เพิ่มลงตะกร้า</span>
							</button>
							<button
								type='submit'
								className='inline-flex px-6 py-2.5 bg-red-600 text-white font-medium text-xl leading-tight rounded-lg ml-6 '
							>
								<span>ซื้อเลย</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    );
}

export default DetailItemTop
