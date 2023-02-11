


import React from 'react';
import "../../css/Feature.css";
import Product from '../Items/Product';
import { Row,Col,Spinner } from 'react-bootstrap';
import Animate from '../../Motion';



const Feature = (props) => {
return (
    <div className='bg-light text-center' style={{float:"left",width:"100vw"}}>
            <div className='padding' style={{maxWidth:700,margin:"auto"}}>
                <br/>
                <br/>
                {props.title ?  <h1 className={props.variant}>{props.title}</h1>:null}
                {props.body ?  <h6 className={props.variant}>{props.body}</h6>:null}
            </div>
            <Row>
            {props.items ? props.items.slice(0,4).map(function(product,key){
                            return(
                                <Col xs={6} sm={6} md={3} key={key}>
                                <Product key={key} item={product}/>
                                </Col>
                            );
                        }):<Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>}
            </Row>
            <br/>
            <br/>
            <br/>
    </div>
);
};

export default Feature;
