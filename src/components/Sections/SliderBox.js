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
                <p style={{maxWidth:"600px"}}>
                 <b style={{fontSize:40}}>{slide.title}</b>
                </p>
                <p style={{maxWidth:"390px"}}>
                {slide.body}
                <br/>
                <br/>
                {slide.button}
                </p>
            </Animate>
        </Carousel.Caption>
      </Carousel.Item>
       )}):null
}

    </Carousel>
  );
};


export default SlideBox;
