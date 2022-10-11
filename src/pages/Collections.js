import React,{useState} from "react";
import Category from "../components/Sections/Category";
import app from "../Config";
import Commerce from '@chec/commerce.js';
import { Container } from "react-bootstrap";
const commerce = new Commerce(app.public_key);

const Collections = () => { 
  const [category, setCat] = useState([]);  
    commerce.categories.list().then(function(category){
      setCat(category.data);
    });
  return (
    <Container fluid>
      <br/>
      <br/>
      <br/>
         <Category items={category}/>
    </Container>
  );
};
export default Collections;
