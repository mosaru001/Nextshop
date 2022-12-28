import Link from 'next/link'

import CartIcon from '../../icons/header/cart-icon'
import HeartIcon from '../../icons/header/heart-icon'
import SearchIcon from '../../icons/header/search-icon'
import Logo from './logo'
import { HeaderData } from '../../../data/navbar-data'

const HeaderNavigation = () => {
	const searchProductHandler = (event:any) => {
		event.preventDefault()
	}

	return (
        <nav>
			<ul className='container grid grid-cols-12 mx-auto my-5 bg-white my-0 '>
				<li className='col-span-2 my-auto'>
					<div>
						<Logo />
					</div>
				</li>
				<li className='col-span-8 text-black '>
					<div className='col-span-8 grid grid-flow-row-dense mt-2'>
						<form onSubmit={searchProductHandler} className='inline-flex'>
							<input
								type='text'
								placeholder='ค้นหาชื่อสินค้าหรือแบรนด์'
								className='border-b-4 w-full focus:outline-none'
							/>
							<button type='submit'>
								<SearchIcon />
							</button>
						</form>
					</div>
					<div className=' grid grid-flow-row-dense grid-cols-8  mt-2'>
						{HeaderData.map((data, index) => {
							return (
                                <div
									key={index}
									className='hover:text-gray-800 hover:underline text-lg'
								>
									<Link href={data.href} legacyBehavior>{data.content}</Link>
								</div>
                            );
						})}
					</div>
				</li>
				<li className='col-span-1 text-black hover:stroke-green-600 hover:text-green-600 mx-auto hover:cursor-pointer'>
					<div>
						<CartIcon />
						<a className=' text-base'>ตะกร้าสินค้า</a>
					</div>
				</li>
				<li className='col-span-1 text-black hover:stroke-green-600 hover:text-green-600 mx-auto hover:cursor-pointer'>
					<div>
						<HeartIcon />
						<a className='text-base'>สินค้าโปรด</a>
					</div>
				</li>
			</ul>
		</nav>
    );
}

export default HeaderNavigation
