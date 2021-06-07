// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import _products from "../products";
import Detail from  "./Detail"
import {useState} from "react"


const ProductList = (props) => {
 const  [query,setQuery]= useState("")
 const  [products,setProduct] = useState(_products)
 const deleteProduct =(productId)=>{
setProduct(products.filter((product)=> productId !== product.id))
 }

 const productList = products.filter((product)=> product.name.toLowerCase().includes(query.toLowerCase()) ).map  (
   (product) => (<ProductItem product={product} key={product.id} setProduct={props.setProduct} deleteProduct={deleteProduct}/>))
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
