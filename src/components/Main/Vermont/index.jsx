import React from 'react';
import { Container,Wrapper } from './style';
import Button from '../../../components/Generic/Button';

export const Vermont = () => {
  return (
    <Container>
      <Wrapper>

      <Wrapper.Title>
      Vermont Farmhouse With Antique Jail Is the Weeks Most Popular Home   
      </Wrapper.Title>

      <Button type='primary' width='180px' mt='40'>
      Read more
      </Button>
      </Wrapper>
    </Container>
  );
};

export default Vermont;
