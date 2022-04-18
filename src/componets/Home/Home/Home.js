import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner'
import Extra from '../Extra/Extra';
import Services from '../Services/Services';

const Home = () => {
    return (
      <>
        <Banner></Banner>
        <Container>
          <Services></Services>
          <Extra></Extra>
        </Container>
      </>
    );
};

export default Home;