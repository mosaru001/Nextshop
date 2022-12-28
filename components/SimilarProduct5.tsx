import Image from "next/image";
import Link from "next/link";
import Candy1 from "../public/images/SimilarProduct5/img1.jpg"
import Candy2 from "../public/images/SimilarProduct5/img2.jpg"
import Candy3 from "../public/images/SimilarProduct5/img3.jpg"
import Candy4 from "../public/images/SimilarProduct5/img4.jpg"
import Candy5 from "../public/images/SimilarProduct5/img5.jpg"
import Candy6 from "../public/images/SimilarProduct5/img6.jpg"

function SimilarProduct5() {
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
                    <Image src={Candy1} alt="Candy1" className=" "
                        width={150} height={150} />
                    <div className="w-36">ฟิชเชอร์แมนส์เฟรนด์ ลูกอมชูการ์ฟรีรสมินต์ 25 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 108</div>
                <div className="line-through"> ฿ 114</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Candy2} alt="Candy2" className=" "
                        width={150} height={150} />
                    <div className="w-36">ริโคลา ลูกอมชูการ์ฟรี กลาเซียร์เฟรชมินต์ 17.5 กรัม (แพ็ก 15 ถุง)</div>
                </Link>
                <div className="text-red-800"> ฿ 150</div>
                <div className="line-through"> ฿ 270</div>
            </div>


            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Candy3} alt="Candy3" className=" "
                        width={150} height={150} />
                    <div className="w-36">เพลย์มอร์ ลูกอมกลิ่นแตงโมและเมนทอล แบบขวด 22 กรัม (แพ็ก 6 ขวด)</div>
                </Link>
                <div className="text-red-800"> ฿ 159</div>
                <div className="line-through"> ฿ 174</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Candy4} alt="Candy4" className=" "
                        width={150} height={150} />
                    <div className="w-36">โรสเซล่า นมอัดเม็ดรสหวาน 15 กรัม (แพ็ก 12 ซอง)</div>
                </Link>
                <div className="text-red-800"> ฿ 109</div>
                <div className="line-through"> ฿ 120</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Candy5} alt="Candy5" className=" "
                        width={150} height={150} />
                    <div className="w-36">ฮอลล์ เอ็กซ์เอส คัลเลอร์ ลูกอมชูการ์ฟรี 13.8 กรัม (แพ็ก 12 ชิ้น)</div>
                </Link>
                <div className="text-red-800"> ฿ 315</div>
                <div className="line-through"> ฿ 340</div>
            </div>

            <div className=" inline-grid">
                <Link href="/" legacyBehavior>
                    <Image src={Candy6} alt="Candy6" className=" "
                        width={150} height={150} />
                    <div className="w-36">ฮอลล์ ลูกอมรสน้ำผึ้งผสมเลมอน (100เม็ด) 280 กรัม</div>
                </Link>
                <div className="text-red-800"> ฿ 50</div>
            </div>
        </div>
    );
}

export default SimilarProduct5