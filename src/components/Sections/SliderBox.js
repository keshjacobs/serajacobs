import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';
import Animate from "../../Motion";
import "../../css/Slider.css";

const SlideBox = function(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
  
  {props.items ? props.items.map(function(slide,key){
   return(
      <Carousel.Item style={{backgroundImage:"url("+slide.image+")"}}>
        <Carousel.Caption>
            <Animate>
                  <h2>{slide.title}</h2>
                  <h5>{slide.body}</h5>
                  <br/>
                  {slide.button}
            </Animate>
        </Carousel.Caption>
      </Carousel.Item>
       )}):null
}

    </Carousel>
  );
};


export default SlideBox;
