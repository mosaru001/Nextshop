import Image from "next/image";

const credit = () => {
    return (
        <>
        <div className="">
            <Image src="/images/Banner/new.jpg"
                    alt="new" 
                    className="w-250 h-250 rounded-lg" width={850} height={300} /> 
        </div>
        </>
    );
}

export default credit