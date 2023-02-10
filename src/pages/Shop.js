import React,{useState,useEffect} from "react";
import {
  useParams
} from "react-router-dom";
import app from "../Config";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Row , Col, Spinner } from "react-bootstrap";
import Commerce from '@chec/commerce.js';
import Product from "../components/Items/Product";
import Sort from "../components/Items/Sort";
import Empty from "../components/Items/Empty";
const commerce = new Commerce(app.public_key);

function Shop(props) {
    const {category}=useParams();
    const [products, setProducts] = useState([]); 
    const [order, setOrder] = useState('asc'); 

    const handleSort = event => {
        setProducts([]);
       setOrder(event.target.value);
      };

    useEffect(function(){
    commerce.products.list({
        category_slug:[category],
        sortBy: 'price',
        sortDirection: order
    }).then(function(prods){ 
        if(prods){
            setProducts(prods.data);
        }
    });
    },[order,products]);


  return (
    <div className="bg-light">
    <Row className="padding bg-light">
            <Col sm={12} md={3} className="text-center">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">
                        Home
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
                <Sort order={order} handleSort={handleSort}/>
            </Col>
    </Row>
    {(products ?
    (products.length > 0 ?
    <Row>
        {products.map(function(product,key){
            return(
                <Col xs={6} sm={6} md={3} key={key}>
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
