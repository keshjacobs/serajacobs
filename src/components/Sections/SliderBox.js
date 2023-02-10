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
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide.image}
          alt={slide.title}
        />
        <Carousel.Caption>
            <Animate>
                <p style={{maxWidth:"500px"}}>
                <b style={{fontSize:60}}>{slide.title}</b>
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
