import Hamburger from './hamburger'
import Ads from './ads'
import Slideshow from './Slideshow'

const TopTeaser = () => {
	return (
		<div className='container grid grid-cols-12 md:gap-10 mx-auto'>
			<div className='md:col-span-3 col-span-12 space-y-12 flex flex-col'>
				<Hamburger />
			</div>
			<div className='xl:col-span-6 lg:col-span-5 md:col-span-9 col-span-12 relative bg-cover bg-no-repeat bg-center'>
				<Slideshow />
			</div>
			<div className='xl:col-span-3 lg:col-span-4 md:hidden lg:block hidden'>
				<Ads />
			</div>
		</div>
	)
}

export default TopTeaser
