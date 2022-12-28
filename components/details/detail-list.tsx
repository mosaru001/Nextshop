import DetailItemBottom from "./detail-item-bottom";
import DetailItemTop from "./detail-item-top";

const DetailList = (props:any) => {
  return (
    <>
      <DetailItemTop productName={props.productName} Model={props.Model} image={props.image} image2={props.image2} image3={props.image3} skuCode={props.skuCode} price ={props.price} title={props.title}/>
      <DetailItemBottom description={props.description} model = {props.model} size = {props.size} weight1 = {props.weight1} weight2 = {props.weight2} />
    </>
  );
};

export default DetailList;
