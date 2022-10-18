import {Form} from 'react-bootstrap';
import React from 'react';


function  Sort(props) {
  return (
    <>
    <Form.Group className="mb-3">
          <Form.Select value={props.order} onChange={props.handleSort}>
            <option value="desc">Price, High - Low</option>
            <option value="asc">Price, Low - High</option>
          </Form.Select>
        </Form.Group>
    </>
  );
}

export default Sort;