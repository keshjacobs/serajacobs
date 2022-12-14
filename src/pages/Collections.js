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
    <Container className="bg-light" fluid>
    <br/>
    <br/>
    <br/>
      <br/>
      <br/>
      <br/>
         <Category items={category}/>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </Container>
  );
};
export default Collections;
