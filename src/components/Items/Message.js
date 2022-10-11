import React, { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';

function Message(props) {
  const [show, setShow] = useState(false);
        useEffect(function(){
            setShow(props.show);
        },[]);
        return (
                <Toast bg={props.success ? 'Success':'Danger'} className="d-inline-block m-1" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                    <strong className="me-auto">{props.success ? 'Successful':'Failed'}</strong>
                    </Toast.Header>
                    <Toast.Body>{props.body}</Toast.Body>
                </Toast>
        )
}
export default Message;