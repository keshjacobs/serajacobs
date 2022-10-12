import React,{ useState} from 'react';
import { Row,Col, Container,Navbar,Breadcrumb } from 'react-bootstrap';
import "../css/Map.css";
import ReactMapboxGl, { Layer, Feature,Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import app from "../Config";
const Map = ReactMapboxGl({accessToken:app.map_token});

var Location = function() {
    const [lng, setLng] = useState(app.cords.lng);
    const [lat, setLat] = useState(app.cords.lat);
  return (
        <>

      <br/>
      <br/>
       <Navbar>
        <Container>
            <div className="justify-content-start">
                <Breadcrumb className="padding">
                    <Breadcrumb.Item href="/">
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Store Location
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </Container>
    </Navbar>

        <Container fluid>
            <Row>
                <Col sm={12} md={7}>
                    <Map center={[lat,lng]} style="mapbox://styles/lifeinapril/cl92itdh5008214nui2g7qvng"
                        containerStyle={{
                            height: '400px',
                            width: '100%',
                        }}>
                            <Marker coordinates={[lat,lng]}>
                                <img alt="icon" src={app.icon} style={{height:40}}/>
                            </Marker>
                    </Map>
                </Col>
                <Col sm={12} md={5}>
                    <div className="sidebar">
                        <h5>Store Locations</h5>
                        <hr/>
                        <Row>
                            <Col md={2}> 
                            <img
                                alt="logo"
                                src={app.icon}
                                style={{height:40}}
                                className="d-inline-block align-top"
                            />
                            </Col>
                            <Col>
                                {app.address}    
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

        </Container>
        <br/>
        <br/>
        <br/>
       </>
  );
};
export default Location;
