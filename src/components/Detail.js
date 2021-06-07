import {ShopImage,ThemeButton,ListWrapper} from "../styles"

const Detail = (props) => {


    return(
<ListWrapper>
        <ul>
          <ShopImage  src={props.product.image}/>
           <li> {props.product.name}</li>
           <li> {props.product.price}</li>
           <li> {props.product.details}</li>
        
           <ThemeButton onClick={()=> props.setProduct(null)}> go back</ThemeButton>
           </ul>

</ListWrapper>


    


    )
}
export default Detail; 