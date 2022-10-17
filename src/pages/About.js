import React,{ useState} from 'react';
import {
  useParams
} from "react-router-dom";
import { Row,Col,Button, Accordion, Container,Navbar,Breadcrumb, ListGroup, ListGroupItem } from 'react-bootstrap';
import Animate from '../Motion';
import "../css/Products.css";
import app from "../Config";
import Commerce from '@chec/commerce.js';
import Title from '../components/Sections/Title';
import Brief from '../components/Sections/Brief';
const commerce = new Commerce(app.public_key);

var About = function(props) {
    const {term} = useParams(); 
  return (
        <div className='bg-light'>
            <br/>
            <br/>
            <br/>
            <br/>
            <Brief dark={false} full={false}  data={app.about} set="first" image={app.about.image}/> 
            <br/>
            <br/>
            <br/>

       </div>
  );
};
export default About;
