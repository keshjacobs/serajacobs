


import React from 'react';
import "../../css/Jumbo.css";
import Animate from '../../Motion';

const Jumbo = (props) => {
return (
<div className="box text-left" style={{backgroundImage: `url(${props.image}`}}>
        <Animate>
            <p style={{maxWidth:"400px"}}>
                <b style={{fontSize:50}}>{props.title}</b>
            </p>
            <p style={{maxWidth:"380px"}}>
                {props.body}
                <br/>
                <br/>
                {
                props.button ? props.button:null
                }
            </p>
        </Animate>
</div>

);

};

export default Jumbo;
