import React from 'react';
import { Container,Wrapper,Title,Card,DarrelImg } from './style';
import Darrel from '../../../assets/imgs/testimonials.png';

export const Generic = () => {
  return (
    <Container>
      <Wrapper>

        <Wrapper.Center>
        <Title>
        Testimonials
        </Title>
        </Wrapper.Center>

        <Wrapper.Center>
        <Title.Desc>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </Title.Desc>
        </Wrapper.Center>


        <Wrapper.Between>
          <Card.Container>
        <Card>
          <Title.Desc>“ I believe in lifelong learning and Skola is a great place to learn from experts. Ive learned a lot and recommend it to all my friends “</Title.Desc>
          <DarrelImg src={Darrel}/>
        </Card>
        <Title style={{margin:'37px 0 5px 0'}}>Marvin McKinney</Title>
        <Title.Desc>Designer</Title.Desc>
        </Card.Container>

        <Card.Container>
        <Card>
        <Title.Desc>“ I believe in lifelong learning and Skola is a great place to learn from experts. Ive learned a lot and recommend it to all my friends “</Title.Desc>
        <DarrelImg src={Darrel}/>
        
        </Card>
        <Title style={{margin:'37px 0 5px 0'}}>Marvin McKinney</Title>
        <Title.Desc>Designer</Title.Desc>
        </Card.Container>

        <Card.Container>
        <Card>
        <Title.Desc>“ I believe in lifelong learning and Skola is a great place to learn from experts. Ive learned a lot and recommend it to all my friends “</Title.Desc>
        <DarrelImg src={Darrel}/>
       
        </Card>
        <Title style={{margin:'37px 0 5px 0'}}>Marvin McKinney</Title>
        <Title.Desc>Designer</Title.Desc>
        </Card.Container>

      </Wrapper.Between>

      </Wrapper>
    </Container>
  );
};

export default Generic;
