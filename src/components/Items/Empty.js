import React from 'react';
import ActionButton from '../Buttons/ActionButton';
function Empty(props) {
  return (
    <div className='text-center padding'>
    {props.image ? <img src={props.image} className="rounded me-2" alt="" />:null}
    <h2 className="text-center">{props.title}</h2>
    <br/>
     <ActionButton dark={true} path="/collections" name="View Collections" />
    </div>
  );
}

export default Empty;