


import React from 'react';
import "../../css/Feature.css";


const Content = (props) => {
return (
    <>
            <div className='padding'>
            <h1><b>{props.title}</b></h1>
            <br/>
            {props.sections ? props.sections.map(function(sec,key){
                    if(sec){
                        return(
                            <>
                            <h5 key={key}><b>{sec.title}</b></h5>
                            <h6 key={key}>{sec.body}</h6>
                            <br/>
                            </>
                        )
                    }
                }):null}
            </div>
    </>
);
};

export default Content;
