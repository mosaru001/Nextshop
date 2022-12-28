import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface isDatas {
  date: string;
  time: string;
  items: {
    img: string;
    name: string;
    price: number;
    discount: number;
    url: string;
  }[];
}

interface isItems {
  img: string;
  name: string;
  price: number;
  discount: number;
  url: string;
}

const data: isDatas[] = [
  // JSON Schema Example.
  {
    date: "18.12.2022",
    time: "00:01",
    items: [
      {
        img: "/images/flashsale/items/bed.jpg",
        name: "SatinHeritageที่นอนDAHLIA6ฟุต น้ำตาลเข้ม",
        price: 4500,
        discount: 12,
        url: "",
      },
      {
        img: "/images/flashsale/items/pillow.jpg",
        name: "Satin หมอนหนุนใยสังเคราะห์",
        price: 130,
        discount: 5,
        url: "",
      },
      {
        img: "/images/flashsale/items/rowtakpha.jpg",
        name: "C.I.T. ราวตากผ้าไม้ยางพารา 4 เส้น - ครีม - 33 x 76 x 87 ซม.",
        price: 450,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/puff.jpg",
        name: "Snowgirl คูชั่นเนื้อแมทท์ Matte Cushion to powder 9 กรัม (6 ชิ้น/กล่อง)",
        price: 750,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/prubphanum.jpg",
        name: "ไฟน์ไลน์ น้ำยาปรับผ้านุ่ม แฮปปี้เนส พีชบลอสซั่ม 500 มล",
        price: 62,
        discount: 50,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissue.jpg",
        name: "สก๊อตต์ คลีนแคร์ 32 + 8 ม้วน",
        price: 425,
        discount: 9,
        url: "",
      },
      {
        img: "/images/flashsale/items/pineapplesnack.jpg",
        name: "แน็คเก็ต ขนมปังชีสเชคสับปะรด 108 กรัม (แพ็ก 8 ชิ้น)",
        price: 280,
        discount: 21,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissuebox.jpg",
        name: "คลีเน็กซ์ อโล แอนด์ อี 80S (1 แพ็ก 3 กล่อง)",
        price: 139,
        discount: 17,
        url: "",
      },
    ],
  },
  {
    date: "19.12.2022",
    time: "00:01",
    items: [
      {
        img: "/images/flashsale/items/prubphanum.jpg",
        name: "ไฟน์ไลน์ น้ำยาปรับผ้านุ่ม แฮปปี้เนส พีชบลอสซั่ม 500 มล",
        price: 62,
        discount: 50,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissue.jpg",
        name: "สก๊อตต์ คลีนแคร์ 32 + 8 ม้วน",
        price: 425,
        discount: 9,
        url: "",
      },
      {
        img: "/images/flashsale/items/pineapplesnack.jpg",
        name: "แน็คเก็ต ขนมปังชีสเชคสับปะรด 108 กรัม (แพ็ก 8 ชิ้น)",
        price: 280,
        discount: 21,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissuebox.jpg",
        name: "คลีเน็กซ์ อโล แอนด์ อี 80S (1 แพ็ก 3 กล่อง)",
        price: 139,
        discount: 17,
        url: "",
      },
      {
        img: "/images/flashsale/items/bed.jpg",
        name: "SatinHeritageที่นอนDAHLIA6ฟุต น้ำตาลเข้ม",
        price: 4500,
        discount: 12,
        url: "",
      },
      {
        img: "/images/flashsale/items/pillow.jpg",
        name: "Satin หมอนหนุนใยสังเคราะห์",
        price: 130,
        discount: 5,
        url: "",
      },
      {
        img: "/images/flashsale/items/rowtakpha.jpg",
        name: "C.I.T. ราวตากผ้าไม้ยางพารา 4 เส้น - ครีม - 33 x 76 x 87 ซม.",
        price: 450,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/puff.jpg",
        name: "Snowgirl คูชั่นเนื้อแมทท์ Matte Cushion to powder 9 กรัม (6 ชิ้น/กล่อง)",
        price: 750,
        discount: 10,
        url: "",
      },
    ],
  },
  {
    date: "20.12.2022",
    time: "00:01",
    items: [
      {
        img: "/images/flashsale/items/bed.jpg",
        name: "SatinHeritageที่นอนDAHLIA6ฟุต น้ำตาลเข้ม",
        price: 4500,
        discount: 12,
        url: "",
      },
      {
        img: "/images/flashsale/items/pillow.jpg",
        name: "Satin หมอนหนุนใยสังเคราะห์",
        price: 130,
        discount: 5,
        url: "",
      },
      {
        img: "/images/flashsale/items/rowtakpha.jpg",
        name: "C.I.T. ราวตากผ้าไม้ยางพารา 4 เส้น - ครีม - 33 x 76 x 87 ซม.",
        price: 450,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/puff.jpg",
        name: "Snowgirl คูชั่นเนื้อแมทท์ Matte Cushion to powder 9 กรัม (6 ชิ้น/กล่อง)",
        price: 750,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/prubphanum.jpg",
        name: "ไฟน์ไลน์ น้ำยาปรับผ้านุ่ม แฮปปี้เนส พีชบลอสซั่ม 500 มล",
        price: 62,
        discount: 50,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissue.jpg",
        name: "สก๊อตต์ คลีนแคร์ 32 + 8 ม้วน",
        price: 425,
        discount: 9,
        url: "",
      },
      {
        img: "/images/flashsale/items/pineapplesnack.jpg",
        name: "แน็คเก็ต ขนมปังชีสเชคสับปะรด 108 กรัม (แพ็ก 8 ชิ้น)",
        price: 280,
        discount: 21,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissuebox.jpg",
        name: "คลีเน็กซ์ อโล แอนด์ อี 80S (1 แพ็ก 3 กล่อง)",
        price: 139,
        discount: 17,
        url: "",
      },
    ],
  },
  {
    date: "21.12.2022",
    time: "00:01",
    items: [
      {
        img: "/images/flashsale/items/prubphanum.jpg",
        name: "ไฟน์ไลน์ น้ำยาปรับผ้านุ่ม แฮปปี้เนส พีชบลอสซั่ม 500 มล",
        price: 62,
        discount: 50,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissue.jpg",
        name: "สก๊อตต์ คลีนแคร์ 32 + 8 ม้วน",
        price: 425,
        discount: 9,
        url: "",
      },
      {
        img: "/images/flashsale/items/pineapplesnack.jpg",
        name: "แน็คเก็ต ขนมปังชีสเชคสับปะรด 108 กรัม (แพ็ก 8 ชิ้น)",
        price: 280,
        discount: 21,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissuebox.jpg",
        name: "คลีเน็กซ์ อโล แอนด์ อี 80S (1 แพ็ก 3 กล่อง)",
        price: 139,
        discount: 17,
        url: "",
      },
      {
        img: "/images/flashsale/items/bed.jpg",
        name: "SatinHeritageที่นอนDAHLIA6ฟุต น้ำตาลเข้ม",
        price: 4500,
        discount: 12,
        url: "",
      },
      {
        img: "/images/flashsale/items/pillow.jpg",
        name: "Satin หมอนหนุนใยสังเคราะห์",
        price: 130,
        discount: 5,
        url: "",
      },
      {
        img: "/images/flashsale/items/rowtakpha.jpg",
        name: "C.I.T. ราวตากผ้าไม้ยางพารา 4 เส้น - ครีม - 33 x 76 x 87 ซม.",
        price: 450,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/puff.jpg",
        name: "Snowgirl คูชั่นเนื้อแมทท์ Matte Cushion to powder 9 กรัม (6 ชิ้น/กล่อง)",
        price: 750,
        discount: 10,
        url: "",
      },
    ],
  },
  {
    date: "22.12.2022",
    time: "00:01",
    items: [
      {
        img: "/images/flashsale/items/bed.jpg",
        name: "SatinHeritageที่นอนDAHLIA6ฟุต น้ำตาลเข้ม",
        price: 4500,
        discount: 12,
        url: "",
      },
      {
        img: "/images/flashsale/items/pillow.jpg",
        name: "Satin หมอนหนุนใยสังเคราะห์",
        price: 130,
        discount: 5,
        url: "",
      },
      {
        img: "/images/flashsale/items/rowtakpha.jpg",
        name: "C.I.T. ราวตากผ้าไม้ยางพารา 4 เส้น - ครีม - 33 x 76 x 87 ซม.",
        price: 450,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/puff.jpg",
        name: "Snowgirl คูชั่นเนื้อแมทท์ Matte Cushion to powder 9 กรัม (6 ชิ้น/กล่อง)",
        price: 750,
        discount: 10,
        url: "",
      },
      {
        img: "/images/flashsale/items/prubphanum.jpg",
        name: "ไฟน์ไลน์ น้ำยาปรับผ้านุ่ม แฮปปี้เนส พีชบลอสซั่ม 500 มล",
        price: 62,
        discount: 50,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissue.jpg",
        name: "สก๊อตต์ คลีนแคร์ 32 + 8 ม้วน",
        price: 425,
        discount: 9,
        url: "",
      },
      {
        img: "/images/flashsale/items/pineapplesnack.jpg",
        name: "แน็คเก็ต ขนมปังชีสเชคสับปะรด 108 กรัม (แพ็ก 8 ชิ้น)",
        price: 280,
        discount: 21,
        url: "",
      },
      {
        img: "/images/flashsale/items/tissuebox.jpg",
        name: "คลีเน็กซ์ อโล แอนด์ อี 80S (1 แพ็ก 3 กล่อง)",
        price: 139,
        discount: 17,
        url: "",
      },
    ],
  },
];

// ref Date() : https://stackoverflow.com/a/12409344
const today: Date = new Date();
const yyyy: number = today.getFullYear();
let mm: number = today.getMonth() + 1; // Months start at 0!
let dd: number = today.getDate();
if (dd < 10) {
  dd = parseInt("0" + dd);
}
if (mm < 10) {
  mm = parseInt("0" + mm);
}
const formattedToday = dd + "." + mm + "." + yyyy;

function Tabs(): JSX.Element {
  const [OpenTab, setOpenTab] = useState(0);
  return (
    <>
      <div className="flex xl:space-x-3 overflow-x-auto space-x-2 xl:justify-center">
        {data.map((obj: isDatas, index: number) => (
          <button
            key={index}
            className="focus:bg-red-500 xl:p-0 p-5 xl:w-96 w-52 xl:h-14 border-b-4 focus:border-none border-red-500 focus:text-white text-gray-600"
            onClick={(event): void => {
              event.preventDefault();
              setOpenTab(index);
            }}
          >
            {formattedToday === obj.date ? (
              <p className="xl:text-xl font-bold">ช็อปเลย!</p>
            ) : (
              <p className="xl:text-lg text-sm">รอบต่อไปเริ่ม</p>
            )}
            <p className="text-sm">
              {obj.date} - {obj.time}
            </p>
          </button>
        ))}
      </div>
      {ItemLists(OpenTab)}
    </>
  );
}

function ItemLists(tab: number) {
  function StringDivide(strLength: number): string {
    // Example : Price is 4000. get first digit (is "4") and convert "0" to "X". = "4XXX"
    let x_string = "";
    for (let index = 0; index < strLength - 1; index++) {
      x_string += "X";
    }
    return x_string;
  }
  const items: isItems[] = data[tab].items;
  return <>
    <div className="grid grid-cols-2 gap-4 ">
      {items.map((obj: isItems, index: number) => (
        <Link href={obj.url} key={index} legacyBehavior>
          <div>
            <div className="xl:h-80 h-60 space-y-2 overflow-hidden">
              <div className="flex justify-center border m-0">
                <Image src={obj.img} alt="" width="262" height="262" className="" />
              </div>
              <p className="xl:text-lg text-sm text-black font-semibold break-words">
                {obj.name}
              </p>
            </div>
            <div className=" flex items-center">
              <div className="relative flex justify-center">
                <svg className="text-red-600 h-14" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5 21V3h14v18l-7-3Z"></path>
                </svg>
                <p className="absolute text-md text-white top-2 font-bold">
                  {obj.discount}%
                </p>
                <p className="absolute text-xs text-white bottom-4">OFF</p>
              </div>
              <div>
                <p className="font-bold text-red-600">
                  ฿&nbsp;
                  {formattedToday !== data[tab].date
                    ? `${parseInt(
                      `${obj.price - obj.price * (obj.discount / 100)}`
                    )}`[0] + StringDivide(`${obj.price}`.length)
                    : parseInt(
                      `${obj.price - obj.price * (obj.discount / 100)}`
                    )}
                </p>
                <p className="line-through text-sm text-gray-300 ml-1">
                  ฿{obj.price}
                </p>
              </div>
            </div>
            <div className="bg-red-300 max-w h-5 rounded-full flex items-center justify-center">
              <p className="text-sm text-red-600">ขายแล้ว {0}</p>
            </div>
          </div>

        </Link>
      ))}
    </div>
  </>;
}

export default Tabs;