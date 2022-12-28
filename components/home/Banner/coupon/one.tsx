import Image from "next/image"

export default function bannerone ():any {
    return(
        <>
        <div className="place-items-center">
            <Image src={'/images/coupon/banner/one.jpg'} alt = "" width={1200} height={250}/>
        </div>
        </>
    )
}