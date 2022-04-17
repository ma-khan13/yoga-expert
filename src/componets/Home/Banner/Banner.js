import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import banner from '../../../images/yoga_banner.jpeg'
import './Banner.css'
const Bennar = () => {
    return (
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="overly">
          <Container>
            <Row>
              <Col md={6} className="mx-auto mt-5 d-flex flex-column">
                <h4 className="text-center mb-3 text-white">
                  YOGA ALLIANCE CERTIFIED
                </h4>
                <h1 className="text-white text-center text-uppercase">
                  Art of the movement
                </h1>
                <p className="text">
                  Yoga shop for a few years now and I am always pleased with the
                  service and products. The staff is always friendly and
                  knowledgeable.
                </p>
                <button className="all-service-btn mx-auto text-uppercase">
                  View all services
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Bennar;