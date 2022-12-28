import Image from "next/image";
import Link from "next/link";
import softener1 from "../public/images/SimilarProduct3/img1.jpg"
import softener2 from "../public/images/SimilarProduct3/img2.jpg"
import softener3 from "../public/images/SimilarProduct3/img3.jpg"
import softener4 from "../public/images/SimilarProduct3/img4.jpg"
import softener5 from "../public/images/SimilarProduct3/img5.jpg"
import softener6 from "../public/images/SimilarProduct3/img6.jpg"

function SimilarProduct3() {
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
                    <Image src={softener1} alt="softener1" className=" "
                        width={150} height={150} />
                    <div className="w-36">ดาวน์นี่ น้ำยาปรับผ้านุ่ม ซันไรซ์เฟรช 1200 มล.</div>
                </Link>
                <div className="text-red-800"> ฿ 159</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={softener2} alt="softener2" className=" "
                        width={150} height={150} />
                    <div className="w-36">ไฮยีน ปรับผ้านุ่มชมพู 3500 มล.</div>
                </Link>
                <div className="text-red-800"> ฿ 115</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={softener3} alt="softener3" className=" "
                        width={150} height={150} />
                    <div className="w-36">ดาวน์นี่ น้ำยาปรับผ้านุ่ม การ์เด้นบลูม 1200 มล.</div>
                </Link>
                <div className="text-red-800"> ฿ 159</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={softener4} alt="softener4" className=" "
                        width={150} height={150} />
                    <div className="w-36">ดาวน์นี่ ปรับผ้านุ่ม แพชชั่น 1200 มล.</div>
                </Link>
                <div className="text-red-800"> ฿ 169</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={softener5} alt="softener5" className=" "
                        width={150} height={150} />
                    <div className="w-36">ดาวน์นี่ น้ำยาปรับผ้านุ่มเข้มข้น สวนดอกไม้ผลิ 2100 มล.</div>
                </Link>
                <div className="text-red-800"> ฿ 269</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={softener6} alt="softener6" className=" "
                        width={150} height={150} />
                    <div className="w-36">ดาวน์นี่ ปรับผ้านุ่ม มิสทีค 1200 มล.</div>
                </Link>
                <div className="text-red-800"> ฿ 169</div>
            </div>

        </div>
    );
}

export default SimilarProduct3