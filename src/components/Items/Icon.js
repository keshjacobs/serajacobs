import React from 'react';
import "../../css/Icons.css";

const Icon = (props) => {
return (
  <div style={{width:props.size,height:props.size}} className={"icon "+props.name}> 
  </div>
);
};

export default Icon;
