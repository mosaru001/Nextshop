import FacebookIcon from '../../icons/footer/facebook-icon'
import TwitterIcon from '../../icons/footer/twitter-icon'
import InstagramIcon from '../../icons/footer/instagram-icon'
import YoutubeIcon from '../../icons/footer/youtube-icon'
import LineIcon from '../../icons/footer/line-icon'

const SocialFooter = () => {
	return (
		<div className='mt-0 '>
			<hr />
			<ul className='flex justify-center p-8 '>
				<li className='icon-social'>
					<FacebookIcon />
				</li>
				<li className='icon-social'>
					<TwitterIcon />
				</li>
				<li className='icon-social'>
					<InstagramIcon />
				</li>
				<li className='icon-social'>
					<YoutubeIcon />
				</li>
				<li className='icon-social'>
					<LineIcon />
				</li>
			</ul>

			<hr />
		</div>
	)
}

export default SocialFooter
