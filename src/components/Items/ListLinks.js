import React from 'react';
import {
Stack,
ListGroupItem
} from 'react-bootstrap';
import "../../css/Brief.css";
import  { GrFormNextLink } from "react-icons/gr";
import { Link } from 'react-router-dom';


const ListLink = (props) => {
return (
<>
            <Stack direction="vertical" gap={1}>
                        {
                        props.items.map(function(item){
                            return (
                            <ListGroupItem className="d-flex justify-content-between align-items-start">
                                <div as={Link} className="ms-2 me-auto light">
                                            <div className="fw-bold dark"> {item.title}</div>
                                </div>
                                <GrFormNextLink/>
                            </ListGroupItem>  
                                    )
                        })}
            </Stack>
</>
);
};

export default ListLink;
