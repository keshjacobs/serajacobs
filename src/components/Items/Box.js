


import React from 'react';
import {
Card
} from 'react-bootstrap';
import "../../css/Box.css";

const Box = (props) => {
return (
  <div style={{marginBottom:15}}>
    <Card className={props.bg} style={{minHeight:200,paddingTop:0}}>
    {props.image ? <div className={props.border ? `${props.border}`:null} style={{backgroundSize:"cover",minHeight:250,maxHeight:300,backgroundImage: `url(${props.image}`}} />:null}
    {props.icon ? (<div className={'brief-icon '+ (props.dark ? 'light':'dark')}>{props.icon}</div>):null}
    <Card.Body className={props.variant}>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text height={40}>
          {props.body ? props.body:null}
      </Card.Text>
                 {
                props.sub ? props.sub:null
                }
      {
                props.button ? props.button:null
                }
                <br/>
    </Card.Body>
  </Card>
  </div>
);
};

export default Box;
