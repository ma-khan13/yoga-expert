import React from 'react';
import {  Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
      <Container className="pb-5">
        <h1 className="mt-5 mb-4">Aboute me</h1>
        <Row>
          <Col>
            <Card border="primary">
              <Card.Header>আমার সম্পর্কে কিছু কথা</Card.Header>
              <Card.Body>
                <Card.Title>পরিচয়</Card.Title>
                <Card.Text>
                  আমার নাম : মোহাম্মদ আসিফ খান <br /> বাসা : সিরাজগঞ্জ <br />
                  পড়া লেখা : ডিপ্লোমা ইন ইঞ্জিনিয়ারিং ইন ইলেক্টিক্যাল
                </Card.Text>
                <Card.Title>আমার ইচ্ছে</Card.Title>
                <Card.Text>
                  বর্তমানে আমার এক এবং একমাত্র লক্ষ ওয়েব ডেভেলপমেন্ট এর ওপর
                  ধক্ষতা অর্জন করা যাতে করে ভবিৎষতে একজন ভালো মানের ডেভেলপার হতে
                  পারি।
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default About;