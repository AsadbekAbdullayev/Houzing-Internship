import React from 'react';
import Home from './Home';

import Filter from '../Filter';
import Recommended from './Recommended';
import Category from './Category';
import Vermont from './Vermont';
import Recent from './Recent';
import { Container } from './style';
import Footer from '../Footer';
import ChooseUs from './ChooseUs';
import Testimonials from './Testimonials';

export const Generic = () => {
  return (
    <Container>
      <Filter />
      <Home />
      <Recommended />
      <ChooseUs/>
      <Category/>
      <Vermont/>
      <Recent/>
      <Testimonials/>
      <Footer/>
    </Container>
  );
};

export default Generic;
