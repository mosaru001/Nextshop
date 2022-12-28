import Image from "next/image"
import Link from "next/link"
import image1 from '../public/images/brand/MStamp.jpg'
import image2 from '../public/images/brand/sme.jpg'
import image3 from '../public/images/brand/1free1xd.jpg'
import image4 from '../public/images/brand/true.jpg'
import image5 from '../public/images/brand/supersell.jpg'
import image6 from '../public/images/brand/garnier.jpg'
import image7 from '../public/images/brand/0percent.jpg'
import image8 from '../public/images/brand/unilever.jpg'
import image9 from '../public/images/brand/greatvalue.jpg'
import image10 from '../public/images/brand/seemore.jpg'

function Banner2(): any {
    return (
        <div className=" w-full grid grid-cols-5 gap-auto mx-auto mt-8 justify-items-center xs:w-1/2">
            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image1} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image2} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image3} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image4} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image5} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image6} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image7} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image8} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image9} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>

            <div>
                <Link href='/' legacyBehavior>
                    <Image src={image10} alt='' className='m-1' width={240} height={241} />
                </Link>
            </div>
        </div>
    );

}
export default Banner2