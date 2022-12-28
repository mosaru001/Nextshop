import Image from "next/image";
import Link from "next/link";
import sampoo1 from "../public/images/SimilarProduct/images1(ชมพู แชมพู).jpg"
import sampoo2 from "../public/images/SimilarProduct/images2(ม่วง แชมพู).jpg"
import sampoo3 from "../public/images/SimilarProduct/images3(ม่วง ครีมนวด).jpg"
import sampoo4 from "../public/images/SimilarProduct/images4(ชมพูครีมนวด).jpg"
import sampoo5 from "../public/images/SimilarProduct/images5(เขียว 1 แถม 1).jpg"
import sampoo6 from "../public/images/SimilarProduct/images6(ชมพู 1 แถม 1).jpg"



function SimilarProduct1() {
    return (
        <div>
            <div className=" justify-center hover-cursor-pointer " >
                <div className="inline-grid w-full mx-0 border-4 border-transparent hover:border-black">
                    สินค้าใกล้เคียง
                    <hr className=" h-1 bg-green-700 border-0 m-0  " />
                </div>
            </div>

            <div className="grid-col overflow-x-scroll w-full ">


                
                 <div className=" inline-grid">
                    <Link href="/" legacyBehavior>
                        <Image src={sampoo1} alt="sampoo1" className=" "
                            width={150} height={150} />
                        <div className="w-36">แพนทีน แชมพู(ชมพู) แฮร์ฟอล 410 มล.</div>
                    </Link>
                    <div className="text-red-800"> ฿ 169</div>
                </div>

                <div className=" inline-grid">
                    <Link href="/" legacyBehavior>
                        <Image src={sampoo2} alt="sampoo2" className=" "
                            width={150} height={150} />
                        <div className="w-36">แพนทีน แชมพู(ม่วง) โททัลแคร์ 410 มล.</div>
                    </Link>
                    <div className="text-red-800"> ฿ 169</div>
                </div>

                <div className=" inline-grid">
                    <Link href="/" legacyBehavior>
                        <Image src={sampoo3} alt="sampoo3" className=" "
                            width={150} height={150} />
                        <div className="w-36">แพนทีน ครีมนวดผม(ม่วง)โททัลแดมเมจแคร์ 380 มล.</div>
                    </Link>
                    <div className="text-red-800"> ฿ 169</div>
                </div>

                <div className=" inline-grid">
                    <Link href="/" legacyBehavior>
                        <Image src={sampoo4} alt="sampoo4" className=" "
                            width={150} height={150} />
                        <div className="w-36">แพนทีน ครีมนวดผม(ชมพู)แฮร์ฟอล คอนโทรล 380 มล.</div>
                    </Link>
                    <div className="text-red-800"> ฿ 169</div>
                </div>

                <div className=" inline-grid">
                    <Link href="/" legacyBehavior>
                        <Image src={sampoo5} alt="sampoo5" className=" "
                            width={150} height={150} />
                        <div className="w-36">ซันซิล แชมพู เฮลธีเออร์ & ลอง ผมยาว (เขียว) 350 มล. แพ็กคู่</div>
                    </Link>
                    <div className="text-red-800"> ฿ 199</div>
                </div>


                <div className=" inline-grid">
                    <Link href="/" legacyBehavior>
                        <Image src={sampoo6} alt="sampoo6" className=" "
                            width={150} height={150} />
                        <div className="w-36">ซันซิล แชมพูผมมีน้ำหนัก (ชมพู) 350 มล. (แพ็กคู่)</div>
                    </Link>
                    <div className="text-red-800"> ฿ 199</div>
                </div>

               
            </div>
        </div>
    );
}

export default SimilarProduct1