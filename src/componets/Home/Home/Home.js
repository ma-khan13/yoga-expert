import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner'
import Services from '../Services/Services';

const Home = () => {
    return (
      <>
        <Header></Header>
          <Banner></Banner>
            <Container>
                <Services></Services>
        </Container>
      </>
    );
};

export default Home;