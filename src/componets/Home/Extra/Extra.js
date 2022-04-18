import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Extra = () => {
    return (
      <Container className="pb-5">
        <h1 className="mt-5 mb-4">The benefits of doing yoga</h1>
        <Row
        >
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  These 8 Poses Will Strengthen Your Core—And Boost Your
                  Confidence
                </Accordion.Header>
                <Accordion.Body>
                  Core strength is essential. Not only does a strong core—the
                  muscles of your midsection, including the abdominals and
                  obliques—help you maintain good posture and support your
                  overall health and vitality, there is power in moving from
                  your physical core center. When you feel strong from within,
                  you can start to lean on and trust your inner wisdom—your
                  body’s inherent intelligence—in all aspects of life. The
                  age-old axiom of “healthy body, healthy mind” has scientific
                  backing that shows physical activity boosts self-esteem in
                  ways direct and indirect. <br /> <br /> In other words, when
                  you feel confident in your body and yourself, the way you
                  perceive and show up to situations changes, and as a result,
                  your life changes. And developing core strength can help.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  The Best Stretches for When You’re Recovering from Low Back
                  Pain
                </Accordion.Header>
                <Accordion.Body>
                  I know a lot of yoga students who experience low back pain.
                  And I’ve observed that many of them keep a more limited range
                  of motion in their yoga practice and their everyday movements
                  than their actual pain or tightness necessitates. I think a
                  lot of it has to do with the underlying fear that pain is
                  imminent, which keeps students from moving their bodies in
                  certain ways. <br /> <br />
                  When low back pain is intense, limiting your range of motion
                  is necessary and practical. Even after the pain subsides,
                  there can be a tendency to hold back on movement. You’ve begun
                  to distrust the body and disconnect from it due to an
                  understandable fear of recurring pain. But as intuitive as it
                  might seem to move as little as possible, prolonged restraint
                  of your body actually limits rather than helps mobility in
                  your back. When you’re moving your back only in a certain
                  direction or a limited range of motion, then that’s all your
                  body is going to be able to do.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  These 5 Yoga Practices Will Tone & Strengthen Your Legs
                </Accordion.Header>
                <Accordion.Body>
                  Your legs do a lot for you. Whether you’re walking around on
                  your feet all day or moving through a power yoga sequence,
                  your legs support and carry you—literally. To make your
                  day-to-day activities (including your yoga practice) a little
                  bit easier, it’s important to build strength throughout your
                  lower limbs. These yoga YouTube practices will help you do
                  just that. We know you’ll end these sequences feeling stronger
                  and more powerful—in both body and mind.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    );
};

export default Extra;