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
        <>
        <Title image={app.jumbo.image} variant="light" name="About Us"/>
       <Navbar bg="light" expand="sm">
        <Container>
            <div className="justify-content-start">
                <Breadcrumb className="padding">
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        About Us
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </Container>
    </Navbar>

            <Brief dark={false} full={true}  data={app.about} set="first" image={app.bg[0]}/>   
       </>
  );
};
export default About;
