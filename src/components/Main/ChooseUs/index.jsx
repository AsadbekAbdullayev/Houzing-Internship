import React from 'react';
import {  Container,Wrapper,Title,Icon,Card } from './style';

export const Generic = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Center style={{margin:'0 0 10px 0'}}>
          <Title>
          Why Choose Us?
          </Title>
        </Wrapper.Center>

        <Wrapper.Center style={{margin:'0 0 40px 0'}}>
          <Title.Desc>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </Title.Desc>
        </Wrapper.Center>


    <Wrapper.Between>

    <Card>
      <Icon.Icon1/>
      <Title.subTitle>Trusted By Thousands</Title.subTitle>
      <Title.Desc>
      With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
      </Title.Desc>
    </Card>
    <Card>
      <Icon.Icon2/>
      <Title.subTitle>Wide Renge Of Properties</Title.subTitle>
      <Title.Desc>
      With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
      </Title.Desc>
    </Card>
    <Card>
      <Icon.Icon3/>
      <Title.subTitle>Financing Made Easy</Title.subTitle>
      <Title.Desc>
      With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
      </Title.Desc>
    </Card>
    <Card>
      <Icon.Icon4/>
      <Title.subTitle>See Neighborhoods</Title.subTitle>
      <Title.Desc>
      With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
      </Title.Desc>
    </Card>
  

    </Wrapper.Between>

      </Wrapper>
    </Container>
  );
};

export default Generic;
