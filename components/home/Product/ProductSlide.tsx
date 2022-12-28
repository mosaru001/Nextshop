import Image from "next/image";
import Link from "next/link";
import Product1 from "../../../public/images/ProductSlide/images1.jpg"
import Product2 from "../../../public/images/ProductSlide/images2.jpg"
import Product3 from "../../../public/images/ProductSlide/images3.jpg"
import Product4 from "../../../public/images/ProductSlide/images4.jpg"
import Product5 from "../../../public/images/ProductSlide/images5.jpg"
import Product6 from "../../../public/images/ProductSlide/images6.jpg"

function ProductSlide() {
  return (
    <div className=" w-full justify-center text-black my-0" >
      
      {/* <div className=" w-full mx-0  ">
        ลดอย่างแรง 

        <div className="inline float-right">
					<Link href="/" className="float-right"> ดูเพิ่มเติม >> </Link>
				</div>
        <hr className=" h-1 bg-green-700 border-0 m-0  " />*/}


        <div className=" inline-grid ">
          <Link href="/aefe" legacyBehavior>
            <div>
              <Image src={Product1} alt="Product1" className=" "
                width={150} height={150} />
              <div className="w-36">ลอรีอัล ปารีส เอลแซฟ ฟอล รีซิสท์ 3X แอนไท-แฮร์ฟอล แชมพูสูตรลดปัญหาผมขาดหลุดร่วง 450 มล.</div>
              <div className="text-red-800"> ฿ 119</div>
              <div className="line-through"> ฿ 169</div>
            </div>

          </Link>
        </div>

        <div className="inline-grid">
          <Link href="/asf" legacyBehavior>
            <div>
              <Image src={Product2} alt="Product2" className=" "
                width={150} height={150} />
              <div className="w-36 "> ยำยำสูตรเด็ดซอง รสต้มยำกุ้ง 80 กรัม (ยกลัง 24 ซอง)</div>

              <div className="text-red-800"> ฿ 228</div>
              <div className="line-through"> ฿ 240</div>
            </div>

          </Link>
        </div>

        <div className="inline-grid">
          <Link href="/aefaef" legacyBehavior>
            <div>
              <Image src={Product3} alt="Product3" className=" "
                width={150} height={150} />
              <div className="w-36 ">ดาวน์นี่ การ์เดนบลูม น้ำยาปรับผ้านุ่ม 500 มล.</div>

              <div className="text-red-800"> ฿ 143</div>
              <div className="line-through"> ฿ 150</div>
            </div>

          </Link>
        </div>

        <div className="inline-grid">
          <Link href="/tyujyt" legacyBehavior>
            <div>
              <Image src={Product4} alt="Product4" className=" "
                width={150} height={150} />
              <div className="w-36 "> คินเดอร์บูเอโน ช็อกโกแลตไวท์ 39 กรัม</div>
              <div className="text-red-800"> ฿ 107</div>
              <div className="line-through"> ฿ 114</div>
            </div>

          </Link>

        </div>

        <div className="inline-grid">
          <Link href="/wer" legacyBehavior>
            <div>
              <Image src={Product5} alt="Product1" className=" "
                width={150} height={150} />
              <div className="w-36"> ฮอลล์ เอ็กซ์เอส ลูกอมชูการ์ฟรีรสเมนโทลิปตัส 13.8 กรัม (แพ็ก 12 ชิ้น)</div>

              <div className="text-red-800"> ฿ 315</div>
              <div className="line-through"> ฿ 340</div>
            </div>
          </Link>
        </div>


        <div className="inline-grid">
          <Link href="/rs" legacyBehavior>
            <div>
              <Image src={Product6} alt="Product6" className=" "
                width={150} height={150} />
              <div className="w-36 ">เนสกาแฟ 3in1 เบลนด์แอนด์บรู ริช อโรมา 340 กรัม (17 กรัม x 20 ซอง)</div>

              <div className="text-red-800"> ฿ 60</div>
              <div className="line-through"> ฿ 87</div>
            </div>
          </Link>
        </div>




      {/* </div> */}
    </div>
  );
}

export default ProductSlide
