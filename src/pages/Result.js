import React,{useState} from "react";
import {
  useParams
} from "react-router-dom";
import app from "../Config";
import { Container,Row , Col,Navbar } from "react-bootstrap";
import Commerce from '@chec/commerce.js';
import Product from "../components/Items/Product";
import Animate from "../Motion";
import Empty from "../components/Items/Empty";
const commerce = new Commerce(app.public_key);

function Result(props) {
    const {term}=useParams();
    const [products, setProducts] = useState([]); 
        commerce.products.list({
            query: term,
          }).then(function(prods){ 
            if(prods){
                setProducts(prods.data);
            }
        });
  return (
    <div className="bg-light">
    <br/>
      <br/>
    <Navbar>
        <Container>
            <div className="padding text-center">
                <h2>Search for "{term}"</h2>
            <h6 className="dark">{products ? products.length:0} products found</h6>
            </div>
        </Container>
    </Navbar>
    {products ?
    <Row className="padding">
        {products.map(function(product,key){
            return(
                <Col sm={12} md={2} key={key}>
                    <Animate>
                    <Product key={key} item={product}/>
                    </Animate>
                </Col>
            );
        })}
    </Row>:<Empty title="Could not find your search term"/>}
    <br/>
    <br/>
    <br/>
    </div>
  );
}

export default Result;
