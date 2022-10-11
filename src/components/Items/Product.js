import "../../css/Products.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Animate from "../../Motion";
function Product(props) {
  const [product,setProduct]=useState({});
  useEffect(function(){
    setProduct(props.item);
  })
  return (
    <>
    {product ?
    <div className='product'>
      <Link to={'/item/'+product.id}>
        <Animate>
          <div className='product-image' style={{backgroundImage:"url("+(product.image ? product.image.url:null)+")"}}></div>
          <div className='details'>
              <b>{product.name}</b>
              <h6><b>{product.price ? product.price.formatted_with_symbol:0}</b></h6>
          </div>
        </Animate>
      </Link>
    </div>:null}
    </>
  );
}

export default Product;