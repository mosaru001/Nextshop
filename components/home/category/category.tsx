import HeadCategory from "./category-head";
import CategoryItems from "./category-items";
import axios from "axios";
import { useEffect, useState } from "react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import CategoryPrice from "./category-price";

const Category = (props:any) => {
    return ( 
    <div >
        <div>
            <HeadCategory />
        </div>
            
        <div>
            <CategoryItems image = {props.image2} />
        </div> 
        <div>
            <CategoryPrice />
        </div>
    </div> 
    );
}
 
export default Category;