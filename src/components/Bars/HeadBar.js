import React,{useEffect, useState} from 'react';
import "../../css/Header.css";
import {Navbar,Nav, Container} from 'react-bootstrap';
import Cart from '../Items/Cart';
import Search from '../Items/Search';
import Commerce from '@chec/commerce.js';
import app from '../../Config';
const commerce = new Commerce(app.public_key);

const HeadBar = (props) => {
  const [category, setCat] = useState([]);  
  useEffect(function(){
    commerce.categories.list().then(function(category){
      setCat(category.data);
    });
  })
return (
<>
      <Navbar sticky="top" variant={props.dark ? "dark":"light"} expand="lg" className={props.dark ? 'bg-dark headbar justify-content-evenly':'bg-light headbar justify-content-evenly'}>
          <Container>
           
          <Nav>
                <Navbar.Toggle aria-controls="menu" />
            </Nav>
       
          
          <Navbar.Brand href="/" style={{float:"left"}}>
            {props.icon ? 
            <>
                      <img
                        alt="logo"
                        src={props.icon}
                        style={{height:28,margin:"auto",marginTop:-8}}
                      />&nbsp;<b className='green'>Sera</b>Jacobs
            </>:null
              }

            </Navbar.Brand>
            <Navbar.Collapse id="menu" className="justify-content-start">
                {category.map(function(Link,i){
                    return(  
                        <Nav  key={i}>
                        <Nav.Link  key={i} href={"/shop/"+Link.slug}  className="link" activeStyle={{color:'green'}} to={"/shop/"+Link.slug}>
                        &nbsp;{Link.name} &nbsp; &nbsp;
                        </Nav.Link>
                        </Nav>
                    )
                })
                }
            </Navbar.Collapse>

            <Navbar.Collapse id="menu" className="justify-content-evenly">
              <Nav>
                <Search dark={true}/>
              </Nav>
              <br/>
            </Navbar.Collapse>
            <Nav>
                <Cart/>
            </Nav>
            {/* <Nav>
                <LoginButton  variant="dark"/>
            </Nav> */}
            </Container>
      </Navbar>
    </>

);

  }


export default HeadBar;
