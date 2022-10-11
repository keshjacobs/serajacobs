import React from 'react';
import {
Stack,
} from 'react-bootstrap';
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";
const Socials = (props) => {
return (
<>
            <Stack direction="horizontal" gap={4}>
                <a><GrFacebook/></a>    
                <a><GrInstagram/></a>    
                <a><GrTwitter/></a>    
            </Stack>
</>
);
};

export default Socials;
