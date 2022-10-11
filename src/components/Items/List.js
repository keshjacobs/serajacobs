import React from 'react';
import {
Stack,
ListGroupItem
} from 'react-bootstrap';
import "../../css/Brief.css";
import  { GrCode } from "react-icons/gr";


const List = (props) => {
return (
<>
            <Stack direction="vertical" gap={4}>
                        {
                        props.items.map(function(item,key){
                            return (
                                <ListGroupItem variant='dark' className="dark d-flex justify-content-between align-items-start" key={key}>
                                    {item.icon ? item.icon:<GrCode />}
                                        <div className="ms-2 me-auto light">
                                            <div className="fw-bold light"> {item.title}</div>
                                            {item.body ? (<small>{item.body}</small>):null}
                                        </div>
                               
                                </ListGroupItem>
                            )
                        })}
            </Stack>
</>
);
};

export default List;
