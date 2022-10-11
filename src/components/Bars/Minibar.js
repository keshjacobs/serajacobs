import React from 'react';
import "../../css/Header.css";
import {
Navbar,Nav,
Container
} from 'react-bootstrap';
import app from "../../Config";

class MiniBar extends React.Component{
  constructor(props) {
    super();
  }

  render(){

 
return (
      <Navbar variant={this.props.dark ? "dark":"light"} className={this.props.dark ? 'mini-dark minibar':'mini-light minibar'}>
      <Container fluid>

          <Navbar.Collapse id="minibar" className="justify-content-center">
                {app.category ?
                app.category.map(function(Link,i){
                    return(  
                        <Nav  key={i}>
                        <Nav.Link  key={i} href={Link.path}  className="link" activeStyle={{color:'green'}} to={Link.path}>
                        &nbsp;{Link.icon} &nbsp;{Link.name} &nbsp; &nbsp;
                        </Nav.Link>
                        </Nav>
                    )
                }):null
                }

           </Navbar.Collapse>

        </Container>
      </Navbar>
);

  }

};

export default MiniBar;
