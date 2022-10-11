


import React from 'react';
import "../../css/Feature.css";
import View from '../Items/View';
import { Row,Col } from 'react-bootstrap';
import "../../css/Animation.css";


const Category = (props) => {
return (
    <>
           <Row>
            {props.items.map(function(item,key){
                            return(
                                <Col sm={12} md={4} key={key}>
                                <View key={key} data={item}/>
                                </Col>
                            );
                        })}
            </Row>
    </>
);
};

export default Category;
