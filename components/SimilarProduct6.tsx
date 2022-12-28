import Image from "next/image";
import Link from "next/link";
import Drinkingpowder1 from "../public/images/SimilarProduct6/img1.jpg"
import Drinkingpowder2 from "../public/images/SimilarProduct6/img2.jpg"
import Drinkingpowder3 from "../public/images/SimilarProduct6/img3.jpg"
import Drinkingpowder4 from "../public/images/SimilarProduct6/img4.jpg"
import Drinkingpowder5 from "../public/images/SimilarProduct6/img5.jpg"
import Drinkingpowder6 from "../public/images/SimilarProduct6/img6.jpg"

function SimilarProduct6() {
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
                    <Image src={Drinkingpowder1} alt=" Drinkingpowder1" className=" "
                        width={150} height={150} />
                    <div className="w-36">เนสกาแฟ 3in1 เบลนด์แอนด์บรู สูตรน้ำตาลน้อย 135 กรัม (15 กรัม x 9 ซอง) แพ็ก 8 ถุง</div>
                </Link>
                <div className="text-red-800"> ฿ 325</div>
                <div className="line-through"> ฿ 336</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Drinkingpowder2} alt=" Drinkingpowder2" className=" "
                        width={150} height={150} />
                    <div className="w-36">กาแฟมอคโคน่าทรีโอ 3in1 เอสเปรสโซ่ แพ็ค 40 ซอง</div>
                </Link>
                <div className="text-red-800"> ฿ 139</div>
                <div className="line-through"> ฿ 167</div>
            </div>


            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Drinkingpowder3} alt=" Drinkingpowder3" className=" "
                        width={150} height={150} />
                    <div className="w-36">มอคโคน่าทรีโอ 3in1 เอสเปรสโซ่ 18 กรัม (9 ซอง/ถุง) แพ็ก 6 ถุง</div>
                </Link>
                <div className="text-red-800"> ฿ 244</div>
                <div className="line-through"> ฿ 252</div>
            </div>


            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Drinkingpowder4} alt=" Drinkingpowder4" className=" "
                        width={150} height={150} />
                    <div className="w-36">เนสกาแฟ 3in1 เบลนด์แอนด์บรู เอสเปรสโซ่ โรสต์ 142.2 กรัม (15.8 กรัม x 9 ซอง) แพ็ก 8 ถุง</div>
                </Link>
                <div className="text-red-800"> ฿ 310</div>
                <div className="line-through"> ฿ 336</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Drinkingpowder5} alt=" Drinkingpowder5" className=" "
                        width={150} height={150} />
                    <div className="w-36">มอคโคน่าทรีโอ 3in1 ริชแอนด์สมูท 18 กรัม (9 ซอง/ถุง) แพ็ก 6 ถุง</div>
                </Link>
                <div className="text-red-800"> ฿ 244</div>
                <div className="line-through"> ฿ 252</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Drinkingpowder6} alt=" Drinkingpowder6" className=" "
                        width={150} height={150} />
                    <div className="w-36">มอคโคน่า ทรีโอ กาแฟ 3in1 ริชแอนด์สมูท แพ็ก 40 ซอง</div>
                </Link>
                <div className="text-red-800"> ฿ 139</div>
                <div className="line-through"> ฿ 167</div>
            </div>
        </div>
    );
}

export default SimilarProduct6