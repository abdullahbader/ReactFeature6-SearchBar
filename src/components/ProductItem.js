// Styling
import { ProductWrapper } from "../styles";
import {BsTrash} from "react-icons/cg"
const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
      <img onClick= {()=> props.setProduct(product)} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
    <button onClick ={()=> props.deleteProduct(product.id)}> delete </button>
    </ProductWrapper>
  );
};

export default ProductItem;
