import Link from 'next/link'
import Image from 'next/image'

const TwitterIcon = () => {
	return (
        (<Link
            href='https://twitter.com/7eleventhailand'
            target='_blank'
            rel='noopener noreferrer'>

            <Image
                src='/images/footer/circle-button-twitter.png'
                alt='facebook'
                width={61}
                height={60}
            />

        </Link>)
    );
}

export default TwitterIcon
