import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import {Container,Navbar,Breadcrumb } from 'react-bootstrap';
import "../css/Products.css";
import Content from '../components/Sections/Content';
import Privacy from '../Policies/Privacy';
import Shipping from '../Policies/Shipping';
import Terms from '../Policies/Terms';

var Policy = function() {
    var [doc , getDoc]=useState([]);
    const {term} = useParams(); 
    useEffect(function(){
    if(term==="Privacy"){
        getDoc(Privacy);
    }else 
    if(term==="Shipping"){
        getDoc(Shipping);
    }else 
    if(term==="Terms"){
        getDoc(Terms);
    }
},[term]);
  return (
        <>
       <Navbar bg="light" expand="sm">
        <Container>
            <div className="justify-content-start">
                <Breadcrumb className="padding">
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Policies
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                       {term}
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </Container>
    </Navbar>
        <Container fluid>
                <Content title={term} sections={doc}/>
        </Container>
       </>
  );
};
export default Policy;
