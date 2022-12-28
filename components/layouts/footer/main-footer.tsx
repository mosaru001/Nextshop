import SocialFooter from './social-footer'
import ServiceFooter from './service-footer'
import ImprintFooter from './imprint-footer'
import AoFooter from './ao-footer'

const MainFooter = () => {
	return (
		<footer className='bg-white'>
			<SocialFooter />
			<AoFooter />
			<ServiceFooter />
			<ImprintFooter />
		</footer>
	)
}

export default MainFooter
