import React,{useState} from "react";
import {
  useParams
} from "react-router-dom";
import app from "../Config";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Container,Row , Col,Navbar, Spinner } from "react-bootstrap";
import Commerce from '@chec/commerce.js';
import Product from "../components/Items/Product";
import Sort from "../components/Items/Sort";
import Animate from "../Motion";
import Empty from "../components/Items/Empty";
const commerce = new Commerce(app.public_key);

function Shop(props) {
    const {category}=useParams();
    const [products, setProducts] = useState([]); 
        commerce.products.list({category_slug:[category]}).then(function(prods){ 
            if(prods){
                setProducts(prods.data);
            }
        });
  return (
    <>
    <br/>
    <br/>
    <Navbar>
        <Container>
            <div className="justify-content-start">
                <Breadcrumb className="padding">
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {category}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="justify-content-end">
            <h6 className="dark">{products ? products.length:0} Products</h6>
            </div>
            <div className="justify-content-end">
                <Sort/>
            </div>
        </Container>
    </Navbar>
    {(products ?
    (products.length > 0 ?
    <Row className="padding">
        {products.map(function(product,key){
            return(
                <Col sm={12} md={3} key={key}>
                    <Product key={key} item={product}/>
                </Col>
            );
        })}
    </Row>:<Spinner className='dark center' animation="border" />):<Empty title="No item available at the moment"/>)}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
}

export default Shop;
