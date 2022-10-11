


import React from 'react';
import "../../css/Feature.css";
import Product from '../Items/Product';
import { Row,Col,Spinner } from 'react-bootstrap';
import Animate from '../../Motion';



const Feature = (props) => {
return (
    <>
            <div className='text-center padding' style={{maxWidth:700,margin:"auto"}}>
                {props.title ?  <h1 className={props.variant}>{props.title}</h1>:null}
                {props.body ?  <h6 className={props.variant}>{props.body}</h6>:null}
            </div>
            <Row>
            {props.items ? props.items.slice(0,4).map(function(product,key){
                            return(
                                <Col sm={12} md={3} key={key}>
                                <Animate>
                                <Product key={key} item={product}/>
                                </Animate>
                                </Col>
                            );
                        }):<Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>}
            </Row>
            <br/>
            <br/>
            <br/>
    </>
);
};

export default Feature;
