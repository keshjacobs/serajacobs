


import React from 'react';
import { Container } from 'react-bootstrap';

const Title = (props) => {
return (
    <>
    <div className={props.bg} style={{backgroundImage: `url(${props.image}`}}>
            <div className={`text-${props.align ? props.align:"center"} padding`} style={{maxWidth:900,margin:"auto"}}>
                <h2 className={props.variant}>{props.name}</h2>
                <h6 className={props.variant}>
                    {
                    props.body ? props.body:null
                    }
                </h6>
                <br/>
                 {
                    props.button ? props.button:null
                    }
            </div>
    </div>
    </>
);
};

export default Title;
