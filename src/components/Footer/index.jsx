import React from 'react';
import { Container,Title,Desc,Wrapper,Icon,Logo } from './style';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>

      <Wrapper.Between>
        <Wrapper.Column>
          <Title>Contact Us</Title>
          <Wrapper.Flex>
            <Icon.Bed/> <Wrapper.Text>
              <Desc>329 Queensberry Street, North Melbourne VIC 3051, Australia.</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Icon.Bed/> <Wrapper.Text>
              <Desc>123 456 7890</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Icon.Bed/> <Wrapper.Text>
              <Desc>support@houzing.com</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>
          </Wrapper.Column>


          <Wrapper.Column>
          <Title>Discover</Title>
          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Chicago</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
           <Wrapper.Text>
              <Desc>Los Angeles</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Miami</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>New York</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>
          </Wrapper.Column>


          <Wrapper.Column>
          <Title>Lists by Category</Title>
          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Apartments</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
           <Wrapper.Text>
              <Desc>Condos</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Houses</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Offices</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>
          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Retail</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>
          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Villas</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>
          </Wrapper.Column>


          <Wrapper.Column>
          <Title>Lists by Category</Title>
          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>About Us</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
           <Wrapper.Text>
              <Desc>Terms & Conditions</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Support Center</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          <Wrapper.Flex>
            <Wrapper.Text>
              <Desc>Contact Us</Desc>
            </Wrapper.Text>
          </Wrapper.Flex>

          </Wrapper.Column>
       
      </Wrapper.Between>

      <Container.Line/>


      <Wrapper.Between style={{alignItems: 'center'}}>

      <Logo>
            <Logo.Icon />
            <Title m>Houzing</Title>
      </Logo>

    <Desc>Copyright © 2021 CreativeLayers. All Right Reserved.</Desc>

      </Wrapper.Between>
      </Wrapper>
    </Container>
  );
};

export default Footer;
