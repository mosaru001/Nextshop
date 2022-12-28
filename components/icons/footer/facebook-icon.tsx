import Link from 'next/link'
import Image from 'next/image'

const FacebookIcon = () => {
	return (
        (<Link
            href='https://web.facebook.com/7ElevenThailand/?_rdc=1&_rdr'
            target='_blank'
            rel='noopener noreferrer'>

            <Image
                src='/images/footer/circle-button-facebook.png'
                alt='facebook'
                width={61}
                height={60}
            />

        </Link>)
    );
}

export default FacebookIcon
