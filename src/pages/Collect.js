import React,{useState} from "react";
import {
  useParams
} from "react-router-dom";
import Category from "../components/Sections/Category";
import app from "../Config";
import Commerce from '@chec/commerce.js';
import { Container } from "react-bootstrap";
const commerce = new Commerce(app.public_key);

const Collect = () => { 
    const {id} = useParams(); 
  const [section, setCat] = useState([]);  
  commerce.categories.retrieve(id).then(function(cat){
      setCat(cat);
      console.log(cat);
    });
  return (
    <Container className="bg-light" fluid>
    <br/>
    <br/>
    <br/>
      <br/>
      <br/>
      <br/>
         <Category items={section.children}/>
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
export default Collect;
