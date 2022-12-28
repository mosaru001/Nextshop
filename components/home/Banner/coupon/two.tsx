import Image from "next/image"

export default function bannertwo ():any {
    return(
        <>
        <div className="place-items-center">
            <Image src={'/images/coupon/banner/two.jpg'} alt = "" width={1200} height={250}/>
        </div>
        </>
    )
}