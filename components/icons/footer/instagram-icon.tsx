import Link from 'next/link'
import Image from 'next/image'

const InstagramIcon = () => {
	return (
        (<Link
            href='https://www.instagram.com/7.eleventhailand/'
            target='_blank'
            rel='noopener noreferrer'>

            <Image
                src='/images/footer/circle-button-instagram.png'
                alt='facebook'
                width={61}
                height={60}
            />

        </Link>)
    );
}

export default InstagramIcon
