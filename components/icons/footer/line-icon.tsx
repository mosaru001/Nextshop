import Link from 'next/link'
import Image from 'next/image'

const LineIcon = () => {
	return (
        (<Link
            href='https://page.line.me/cpall'
            target='_blank'
            rel='noopener noreferrer'>

            <Image
                src='/images/footer/circle-button-line.png'
                alt='facebook'
                width={61}
                height={60}
            />

        </Link>)
    );
}

export default LineIcon
