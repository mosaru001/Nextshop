import Link from 'next/link'
import Image from 'next/image'

const YoutubeIcon = () => {
	return (
        (<Link
            href='https://www.youtube.com/channel/UCpu3-NFPc8Fl0WIVsGdb3KA'
            target='_blank'
            rel='noopener noreferrer'>

            <Image
					src='/images/footer/circle-button-youtube.png'
					alt='facebook'
					width={61}
					height={60}
				/>

        </Link>)
    );
}

export default YoutubeIcon
