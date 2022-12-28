import Image from "next/image";

const OUTLET = () => {
    return (
        <>
        <div className="m-2 ">
            <Image src="/images/Banner/outletxd.jpg"
                    alt="outlet" 
                    className="w-250 h-250 object-cover rounded-lg" width={1200} height={300} /> 
        </div>
        </>
    );
}

export default OUTLET