import Image from "next/image";
import Link from "next/link";
import chocolate1 from "../public/images/SimilarProduct4/img1.jpg"
import chocolate2 from "../public/images/SimilarProduct4/img2.jpg"
import chocolate3 from "../public/images/SimilarProduct4/img3.jpg"
import chocolate4 from "../public/images/SimilarProduct4/img4.jpg"
import chocolate5 from "../public/images/SimilarProduct4/img5.jpg"
import chocolate6 from "../public/images/SimilarProduct4/img6.jpg"

function SimilarProduct4() {
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
                    <Image src={chocolate1} alt="chocolate1" className=" "
                        width={150} height={150} />
                    <div className="w-36">เดลฟี่ท็อป ช็อกโกแลตเอ็กซ์ตร้าลาร์จ 45 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 39</div>
                <div className="line-through"> ฿ 60</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={chocolate2} alt="chocolate2" className=" "
                        width={150} height={150} />
                    <div className="w-36">นูเทลล่าบีเรดี้ เวเฟอร์ไส้โกโก้ผสมเฮเซลนัท 22 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 106</div>
                <div className="line-through"> ฿ 112</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={chocolate3} alt="chocolate3" className=" "
                        width={150} height={150} />
                    <div className="w-36">คินเดอร์บูเอโน ช็อกโกแลต 43 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 107</div>
                <div className="line-through"> ฿ 114</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={chocolate4} alt="chocolate4" className=" "
                        width={150} height={150} />
                    <div className="w-36">เฮอร์ชีส์ ช็อกโกแลตบาร์มิลค์ 40 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 89</div>
                <div className="line-through"> ฿ 96</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={chocolate5} alt="chocolate5" className=" "
                        width={150} height={150} />
                    <div className="w-36">เฮอร์ชีส์นักเก็ต ช็อกโกแลตมิลค์อัลมอนด์ 28 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 75</div>
                <div className="line-through"> ฿ 81</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={chocolate6} alt="chocolate6" className=" "
                        width={150} height={150} />
                    <div className="w-36">กูลิโกะ แอลฟี่รสช็อกโกแลต 31 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 90</div>
                <div className="line-through"> ฿ 100</div>
            </div>

        </div>
    );
}

export default SimilarProduct4