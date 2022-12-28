import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide"; // Have error in this point but Component It's working!
import "@splidejs/react-splide/css";

function Banner() {
  return (
    <>
            <Image
              className="hover:opacity-80 cursor-pointer "
              src={"/images/flashsale/banner/flash.jpg"}
              width={1231}
              height={395}
              alt={"Flashsale"}
            />
          
        
      
    </>
  );
}

export default Banner;
