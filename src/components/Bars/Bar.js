import React from 'react';
import "../../css/Header.css";

const Bar=function({children}){
 
 
return (
      <div className='minibar text-center'>
         <small>{children}</small>
      </div>
);


};

export default Bar;
