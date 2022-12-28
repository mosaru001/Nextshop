import Link from 'next/link'
import Image from 'next/image'
import Banner from "../../../public/images/nav/nav-promotion.jpg"
const Promotion = () => {
	return (
        <Link
            href="/about"
            className="overflow-hidden bg-no-repeat bg-cover bg-white "
            legacyBehavior>
			<Image
				src={Banner}
				alt="Banner"
				className="w-full bg-fixed opacity-100 hover:opacity-80 transition duration-300 ease-in-out bg-white "
			/>
		</Link>
    );
}

export default Promotion
