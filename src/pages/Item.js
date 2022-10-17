/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect, useState} from 'react';
import {
  useParams
} from "react-router-dom";
import { Row,Col,Form, Image,Breadcrumb, Spinner} from 'react-bootstrap';
import Animate from '../Motion';
import "../css/Products.css";
import app from "../Config";
import Commerce from '@chec/commerce.js';
import Mirror from '../components/Items/Mirror';
import Error from '../components/Items/Error';
import Message from '../components/Items/Message';

const commerce = new Commerce(app.public_key);

var Item = function() {
    const {id} = useParams(); 
    const [product, getProduct] = useState({}); 
    const [mainImage, getImage] = useState(""); 
    const [vary, setVary] = useState({}); 
    const [category, getCategory] = useState(""); 
    const [Loading, startLoad] = useState(false); 
    const [Qty, setQty] = useState(1); 
   const [pop, PopUp] = useState({show:false});
    var CartQty=(qty)=>{
        if(qty > 0){
            setQty(qty);
        }
    }
    const addcart = function() {
        startLoad(true);
        commerce.cart.add(product.id,Qty,vary).then(function(response){
            startLoad(false);
            if(response){
                PopUp({ 
                    success:true,
                    show:true,
                    body:"Added to cart"
                });
            }
        });
    }

    const handleVariant = function(id,e){
        e.preventDefault();
        vary[id]=e.target.value;
        setVary(vary);
    }

    useEffect(function(){
        commerce.products.retrieve(id,vary).then(function(prod){ 
            if(prod){
                getProduct(prod);
                getImage(prod.image.url);
                getCategory(prod.categories[0].slug);
            }
            });
    },[id, vary])

    console.log("prod:");
    console.log(product);
  return (
        <div className='bg-light'>                
             
      <br/>
        <Breadcrumb className="padding bg-light">
            <Breadcrumb.Item href="/">
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href={"/shop/" + category}>
            {category}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                {product ? product.name:null}
            </Breadcrumb.Item>
        </Breadcrumb>
       <Message show={pop.show} success={pop.success} title={pop.title} body={pop.body}/>   
        <div className='row'>
           
            <Col sm={12} md={5}>
                {mainImage ? 
                 <Animate>
                 <Image className='item-image' src={mainImage}/>
             </Animate>
             :<Spinner className='dark center' animation="border" />
             }   
                <br/>
                <br/>
            </Col>
            <Col sm={12} md={{span:2,order: "first" }}>
                        {product.assets ?
                            // eslint-disable-next-line array-callback-return
                            product.assets.map(function(asset,key){
                                    if(asset){
                                        return(<a key={key} onClick={()=>getImage(asset.url)}>
                                                    <Mirror url={asset.url}/>
                                                </a>)
                                    }
                            }):null
                        }
            </Col>
            <Col sm={12} md={4}>
            {product ? 
                <div style={{padding:10}}>
                <Animate>
                        <h2>{product.name}</h2>
                        <small>{category}</small>
                        <h6><small>ID: {product.id}</small></h6>
                        <b className='green'>{product.price ? product.price.formatted_with_symbol:0}</b>
                        
                        {product.description ?  product.description:null}

                </Animate>
                        {product.variant_groups ?
                            <>
                            <br/>
                                {product.variant_groups.map(function(variant,key){
                                if(variant){
                                    return(
                                        <Form key={key}>
                                            <Form.Label><b>{variant.name}</b></Form.Label>
                                            <Form.Select value={vary[variant.id]} onChange={(e)=>handleVariant(variant.id,e)}>
                                                {variant.options ? variant.options.map(function(option,k){
                                                    return(<option value={option.id} key={k}>{option.name}</option>);
                                                    }):null}
                                            </Form.Select>
                                        </Form>
                                        )
                                    }
                            })}
                            <br/>
                            </>
                           :null
                        }
                        {product.inventory ? (product.inventory.available > 0 ?  
                            <>
                                <Row className='counter text-center'>
                                    <button disabled={Qty < 2} className="btn col" onClick={() => CartQty(Qty - 1)}>-</button>
                                    <div className="count col">{Qty || 0}</div>
                                    <button disabled={product.inventory ? (Qty >= product.inventory.available):0} className="btn col" onClick={() => CartQty(Qty + 1)}>+</button>
                                </Row>
                                <br/>
                                <br/>
                                <div className="d-grid gap-3">
                                <a size='lg' className='btn btn-green' disabled={Loading} variant="green" onClick={()=> addcart()}>{Loading ? "Adding...":"Add to Cart"}</a>
                                <a href={product.checkout_url ? product.checkout_url.checkout:null} className="btn checkout-button">Buy Now</a>
                                </div>
                            </>
                        :<Error text="Out of stock"/>):null}
                        </div>
                        :null}
            </Col>
        </div>
        <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
       </div>
  );
};
export default Item;
