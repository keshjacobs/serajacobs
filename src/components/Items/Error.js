import React from 'react';
function Error(props) {
  return (
    <div className='text-center padding'>
        <b className="text-center red">{props.text}</b>
    </div>
  );
}

export default Error;