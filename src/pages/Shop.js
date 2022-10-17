import React,{useState} from "react";
import {
  useParams
} from "react-router-dom";
import app from "../Config";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Nav,Row , Col,Navbar, Spinner } from "react-bootstrap";
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
    <div className="bg-light">
    <Row className="padding bg-light">
            <Col sm={12} md={3} className="text-center">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        Hom
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        {category}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col sm={12} md={6} className="text-center">
            <h6 className="dark">{products ? products.length:0} Products</h6>
            </Col>
            <Col sm={12} md={3}>
                <Sort/>
            </Col>
    </Row>
    {(products ?
    (products.length > 0 ?
    <Row>
        {products.map(function(product,key){
            return(
                <Col sm={3} md={3} key={key}>
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
    </div>
  );
}

export default Shop;
