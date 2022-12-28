import axios from "axios";
import { useEffect, useState } from "react";

const CategoryPrice = () => {

    const [productPriceCode, setProductPriceCode] = useState([]);

    const fetchMaster = async () => {
        const ProductMasterPath = "http://localhost:8080/api/get-productMaster";
        const response = await axios.get(ProductMasterPath)
        setProductPriceCode(response.data)
        console.log(response.data)
    } 

    useEffect(() => {
        fetchMaster();
      }, []);
      
    return ( 
        <div>
        {productPriceCode.map((data:any,index) =>{
            return (
                <p key={index}>{data.productPriceCode}</p>
            )
        })}
        </div>
     );
}
 
export default CategoryPrice;