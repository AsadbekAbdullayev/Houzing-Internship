import React from 'react';
import {Container} from './style';
import Uy from '../../../assets/imgs/uy3.png';

const Card = ({title, onClick}) => {
  return (
    <Container onClick={onClick}>
      <Container.Title>
      {title}
      </Container.Title>

      <Container.Image src={Uy}/>
      </Container>
  );
};

export default Card;