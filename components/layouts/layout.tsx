
import MainNavigation from './header/main-navigation'
import MainFooter from './footer/main-footer'
const Layout = (props:any) => {
	return (
		<>
			<MainNavigation />
			<main>{props.children}</main>
			<MainFooter />
		</>
	)
}

export default Layout
