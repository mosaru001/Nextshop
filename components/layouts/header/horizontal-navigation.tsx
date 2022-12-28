import Link from 'next/link'

import { HorizontalData } from '../../../data/navbar-data'

const HorizontalNavigation = () => {
	return (
        <nav className='bg-green-600 text-white text-m font-semibold'>
			<ul className='container grid grid-flow-row-dense grid-cols-7 mx-auto'>
				{HorizontalData.map((data, index) => {
					return (
                        <li
							className='py-2 hover:underline hover:underline-offset-8 hover:decoration-2 text-center text-xl'
							key={index}
						>
							<Link href={data.href} legacyBehavior>{data.content}</Link>
						</li>
                    );
				})}
			</ul>
		</nav>
    );
}

export default HorizontalNavigation
