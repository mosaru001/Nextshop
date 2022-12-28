import Image from "next/image";
import Link from "next/link";
import Mama1 from "../public/images/SimilarProduct1/images1.jpg"
import Mama2 from "../public/images/SimilarProduct1/images2.jpg"
import Mama3 from "../public/images/SimilarProduct1/images3.jpg"
import Mama4 from "../public/images/SimilarProduct1/images4.jpg"
import Mama5 from "../public/images/SimilarProduct1/images5.jpg"
import Mama6 from "../public/images/SimilarProduct1/images6.jpg"

function SimilarProduct2() {
return (
    <div>

    <div className=" justify-center hover-cursor-pointer " >
                    <div className="inline-grid w-full mx-0 border-4 border-transparent hover:border-black">
                        สินค้าใกล้เคียง
                        <hr className=" h-1 bg-green-700 border-0 m-0  " />
                    </div>
                </div>

                <div className="grid-col overflow-x-scroll w-full "></div>

                <div className=" inline-grid">
                        <Link href="/" legacyBehavior>
                            <Image src={Mama1} alt="Mama1" className=" "
                                width={150} height={150} />
                            <div className="w-36">มาม่าออเรียนทัลคิตเชน รสกุ้งผัดซอสต้มยำ 85 กรัม (แพ็ก 4 ซอง)</div>
                        </Link>
                        <div className="text-red-800"> ฿ 58</div>
                        <div className="line-through"> ฿ 60</div>
                    </div>

                    <div className=" inline-grid">
                        <Link href="/" legacyBehavior>
                            <Image src={Mama2} alt="Mama2" className=" "
                                width={150} height={150} />
                            <div className="w-36">มาม่าออเรียนทัลคิตเชน รสฮอตโคเรียน 85 กรัม (แพ็ก 4 ซอง)</div>
                        </Link>
                        <div className="text-red-800"> ฿ 58</div>
                        <div className="line-through"> ฿ 60</div>
                        
                    </div>

                    <div className=" inline-grid">
                        <Link href="/" legacyBehavior>
                            <Image src={Mama3} alt="Mama3" className=" "
                                width={150} height={150} />
                            <div className="w-36">มาม่าออเรียนทัลคิตเชน รสคาโบนาร่าเบคอน 85 กรัม (แพ็ก 4 ซอง)</div>
                        </Link>
                        <div className="text-red-800"> ฿ 58</div>
                        <div className="line-through"> ฿ 60</div>
                    </div>

                    <div className=" inline-grid">
                        <Link href="/" legacyBehavior>
                            <Image src={Mama4} alt="Mama4" className=" "
                                width={150} height={150} />
                            <div className="w-36">ซัมยังซอง ฮอตชิคเก้นราเมงสูตรเผ็ดมาก 140 กรัม (แพ็ก 5 ซอง)</div>
                        </Link>
                        <div className="text-red-800"> ฿ 215</div>
                        <div className="line-through"> ฿ 240</div>
                    </div>

                    <div className=" inline-grid">
                        <Link href="" legacyBehavior>
                            <Image src={Mama5} alt="Mama5" className=" "
                                width={150} height={150} />
                            <div className="w-36">ยำยำจัมโบ้ รสต้มยำกุ้งน้ำข้น 63 กรัม (ยกลัง 30 ซอง)</div>
                        </Link>
                        <div className="text-red-800"> ฿ 200</div>
                        <div className="line-through"> ฿ 210</div>
                    </div>

                    <div className=" inline-grid">
                        <Link href="/" legacyBehavior>
                            <Image src={Mama6} alt="Mama6" className=" "
                                width={150} height={150} />
                            <div className="w-36">ยำยำเส้นแบน รสสุกี้ 55 ก. ยกลัง (แพ็ก30)</div>
                        </Link>
                        <div className="text-red-800"> ฿ 170</div>
                        <div className="line-through"> ฿ 180</div>
                    </div>

    </div>
);
}


export default SimilarProduct2