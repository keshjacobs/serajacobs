import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import "../../css/PSlider.css";

const ProductSlider = function(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
  
  {props.images ? props.images.map(function(image,key){
   return(
      <Carousel.Item key={key} className="pslide" style={{backgroundImage:"url("+image.url+")",backgroundSize:"contain"}}>
      </Carousel.Item>
       )}):null
}

    </Carousel>
  );
};


export default ProductSlider;
