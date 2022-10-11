import React,{useEffect, useState} from 'react';
import "../../css/Cart.css";
import { Row ,Col,Image,Spinner} from 'react-bootstrap';
import app from "../../Config";
import Commerce from '@chec/commerce.js';
const commerce = new Commerce(app.public_key);


function CartItem(props){
    const [Loading, startLoad] = useState(false); 
    const [qty, setQty] = useState(props.item.quantity);


    useEffect(function(){
        props.CartQty(props.item.id, qty);
    },[props, qty]);

return (
<div className="cart-item">
    <Row>
        <Col md={true} sm={12}>
            <br/>
            <div className='cart-product'>
                {/* <div className='cart-image' style={{backgroundImage:`url(${props.item.image.url})`}}>
                </div> */}
                <Image className='cart-image' src={props.item.image.url}/>
                <br/>
                <div className="cart-details">
                    <b>{props.item.name}</b>
                    <h6><small>{props.item.price.formatted_with_symbol}</small></h6>
                    {props.item.description}
                </div>
            </div>
        </Col>
        <Col md={true} sm={12} className="text-right">
            <br/>

                <div className="counter">
                        <button className="btn" disabled={qty < 2} onClick={() => setQty(qty - 1)}>-</button>
                        <div className="count">{qty || 0}</div>
                        <button className="btn" disabled={props.item.inventory ? (qty >= props.item.inventory.available):0} onClick={() => setQty(qty + 1)}>+</button>
                </div>
                <br/>
            {Loading ? 
                <Spinner className='dark' animation="border" />:
                <>
                <div className='amount'>
                {props.item.line_total.formatted_with_symbol}
                </div>
                <button className="cart-remove" onClick={() => props.RemoveFromCart(props.item.id)}>
                        Remove
                </button>
                </>}
        </Col>
    </Row>
</div>
);

};

export default CartItem;