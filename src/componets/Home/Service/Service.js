
import React from 'react';
import { Card, Col, Button, ListGroup } from "react-bootstrap";

const Service = ({ service }) => {
  let { title, description, duration, start_on, course_fee, picture } = service;
    return (
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description.slice(0, 150) + "..."}</Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item></ListGroup.Item>
              <ListGroup.Item>Duration : {duration}</ListGroup.Item>
              <ListGroup.Item>Start on : {start_on}</ListGroup.Item>
              <ListGroup.Item>
                <h2 className='mb-0'>Price : {course_fee}</h2>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Button className="text-uppercase py-2">Start whit me</Button>
        </Card>
      </Col>
    );
};

export default Service;