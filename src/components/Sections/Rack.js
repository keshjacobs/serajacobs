import React from 'react';
import {
Stack,
Container
} from 'react-bootstrap';
import "./Brief.css";


const Rack = (props) => {
return (
<Container className="text-center">
            <Stack direction="vertical" gap={3}>
                        {
                        props.items.map(function(item){
                            return item;
                        })}
            </Stack>
</Container>
);
};

export default Rack;
