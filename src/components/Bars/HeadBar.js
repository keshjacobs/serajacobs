import React,{useEffect, useState} from 'react';
import "../../css/Header.css";
import {Navbar,Nav, Container} from 'react-bootstrap';
import Cart from '../Items/Cart';
import Search from '../Items/Search';
import Commerce from '@chec/commerce.js';
import app from '../../Config';
import { NavLink } from 'react-router-dom';
const commerce = new Commerce(app.public_key);

const HeadBar = (props) => {
  const [category, setCat] = useState([]);  
  useEffect(function(){
    commerce.categories.list().then(function(cat){
      setCat(cat.data);
    });
  })
return (
<>
      <Navbar sticky="top" variant={props.dark ? "dark":"light"} expand="lg" className={props.dark ? 'bg-dark headbar justify-content-evenly':'bg-light headbar justify-content-evenly'}>
          <Container fluid>

          <Navbar.Toggle aria-controls="menu" />
          <Navbar.Brand href="/" style={{float:"left"}}>
            {props.icon ? 
            <>
                      <img
                        alt="logo"
                        src={props.icon}
                        style={{height:28,margin:"auto",marginTop:-8}}
                      />&nbsp;
            </>:null
              }

            </Navbar.Brand>


            <Navbar.Text>
              <a href="/"><b className='orange'>Sera</b>Jacobs</a>
            </Navbar.Text>

            <Navbar.Collapse className="justify-content-evenly"  placement="end" closeButton>
                {category.map(function(Link,i){
                    return(  
                        <Nav  key={i}>
                        <NavLink activeClassName="active" exact key={i} href={"/shop/"+Link.slug} to={"/shop/"+Link.slug}>
                        &nbsp;{Link.name} &nbsp; &nbsp;
                        </NavLink>
                        </Nav>
                    )
                })
                }
              <Nav>
                <Search dark={true}/>
              </Nav>
            </Navbar.Collapse>

            <Nav>
                <Cart/>
            </Nav>
            </Container>
      </Navbar>
    </>

);

  }


export default HeadBar;
