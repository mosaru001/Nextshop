import HorizontalNavigation from './horizontal-navigation'
import HeaderNavigation from './header-navigation'
import Promotion from './promotion'
import LoginNavigation from './login-navigation'
const MainNavigation = () => {
	return (
		<header>
			<Promotion />
			<LoginNavigation /> 
			<HeaderNavigation />
			<HorizontalNavigation />
		</header>
	)
}

export default MainNavigation
