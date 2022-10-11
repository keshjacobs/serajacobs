import React from 'react';
import {
Row,
Col,
Container
} from 'react-bootstrap';
import "../../css/Brief.css";
import List from '../Items/List';
import ListLink from '../Items/ListLinks';
import Animate from '../../Motion';

class Brief extends React.Component {
    constructor(props) {
        super();
        this.ref = React.createRef();
      }
    
    render(){
        const bg={
            backgroundImage:`url(${this.props.image}`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight:300
        }

return (
        <Row className={this.props.align} style={this.props.full ? bg:null}>
            <Col sm={12} md={{span:6,order: this.props.set }} className={ this.props.dark ? 'brief-dark brief-round':'brief-light brief-round'}>
                <br/><br/>
          
            <div ref={this.ref} className={"sec "+this.props.align}>  
            <br/>    
            <br/>    
                {
                this.props.icon ? (<div className={'brief-icon '+ (this.props.dark ? 'light':'dark')}>{this.props.icon}</div>):null
                }
                {
                    this.props.data.name ?
                        <h6 className={this.props.dark ? 'light':'dark'}><b>{this.props.data.name}</b>:</h6>
                        :null
                }    
                {
                    this.props.data.title ?
                    <div className='brief-head'>
                        <b className={this.props.dark ? 'light':'dark'}>{this.props.data.title}</b>
                    </div>:null
                }
                <br/>
                <div className='brief-body'>
                    <p className={this.props.dark ? 'light':'dark'}>
                    {this.props.data.body}
                    </p>
                 {
                    this.props.linklist ? <ListLink items={this.props.linklist}/>:null
                    }
                </div>
                {
                this.props.list ? <List items={this.props.list}/>:null
                }
                <br/>
                {
                this.props.button ? this.props.button:null
                }
                    
                <br/>
            <br/>    
            <br/>    
                <br/>
            </div>
            </Col>
            <Col  sm={12} md={6} className={this.props.border ? `${this.props.border}`:null}  style={this.props.full ? null:bg}>
            </Col>
        </Row>  
);
            }

};

export default Brief;
