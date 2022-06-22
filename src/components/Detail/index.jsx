import React from 'react';
import {Container,Wrapper } from './style';
import Grid from './Grid';
import DarrelLogin from './DarrelLogin';
import Details from './details';
import Similar from './Similar';
import Footer from '../Footer';
const Detail = () => {
  return (
    <Container>  
        <Grid/>  
    <Wrapper style={{margin:'0 0 50px 0'}}>
      <Details/>
      <DarrelLogin/>
    </Wrapper>
    
      <Similar/>

      <Footer/>

    </Container>
  );
};

export default Detail;