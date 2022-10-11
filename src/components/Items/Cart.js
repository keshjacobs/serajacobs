import React,{useEffect, useState} from 'react';
import "../../css/Buttons.css";
import {ModalFooter, Offcanvas,Button,Badge,Spinner, Row} from 'react-bootstrap';
import { IoMdBasket} from 'react-icons/io';
import CartItem from './CartItem';
import app from "../../Config";
import Empty from './Empty';
import Commerce from '@chec/commerce.js';
const commerce = new Commerce(app.public_key);

function Cart(props){
    const [cart, getCart] = useState({}); 
    const [show, setShow] = useState(false);
    const [Loading, startLoad] = useState(true); 
    
    
    commerce.cart.retrieve().then(function(crt){ 
        if(crt){
            getCart(crt);
            console.log(cart);
        }
   }); 


    const handleShow = () =>{
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    var CartQty = (id,qty) => {
        commerce.cart.update(id, { quantity: qty });
    };

    var RemoveFromCart = (id) => {
        commerce.cart.remove(id);
    };


return (
    <>
            <Button className="cart-button" onClick={handleShow}>
                <IoMdBasket color={props.dark ? 'black':'white'} size={30}/>
                <Badge show={cart ? true:false} bg='orange'>{cart.line_items ? cart.line_items.length:0}</Badge>
            </Button>
            <Offcanvas variant="light" show={show} className="bg-light" onHide={handleClose} placement="end">
                <Offcanvas.Header variant="light" closeButton>
                    Your Cart
                </Offcanvas.Header>
                <Offcanvas.Body>
                {cart.line_items ?
                (cart.line_items.length > 0 ? 
                cart.line_items.map(function(product,key){
                return(
                      <CartItem key={key} isLoading={Loading} item={product} CartQty={CartQty} RemoveFromCart={RemoveFromCart}/>
                        )
                        })
                :<Empty title="Your cart is empty"/>):null
                    }
                </Offcanvas.Body>
                <ModalFooter>     
                    <Row className="checkout padding">
                    {Loading ? <Spinner className='light center' animation="border" />:
                        <> 
                            <div className="Subtotal">Sub-Total <b style={{float:"right"}}>{cart.subtotal ? cart.subtotal.formatted_with_symbol:0}</b></div>
                            <br/>
                            <br/>
                            <a href={cart.hosted_checkout_url} className="checkout-button text-center">Checkout</a>
                        </>
                      }
                    </Row>
                </ModalFooter>
               
              </Offcanvas>

    </>
);

};

export default Cart;
