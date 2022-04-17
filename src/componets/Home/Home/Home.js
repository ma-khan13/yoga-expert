import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';

const Home = () => {
    return (
      <>
          <Banner></Banner>
            <Container>
                <Services></Services>
        </Container>
      </>
    );
};

export default Home;