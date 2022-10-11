import React from 'react';
import {Form} from 'react-bootstrap';

function  Sort(props) {
  return (
    <>
    <Form.Group className="mb-3">
          <Form.Select id="Sort">
            <option>Best Selling</option>
            <option>Price, High - Low</option>
            <option>Price, Low - High</option>
            <option>Date, New - Old</option>
            <option>Date, Old - New</option>
          </Form.Select>
        </Form.Group>
    </>
  );
}

export default Sort;