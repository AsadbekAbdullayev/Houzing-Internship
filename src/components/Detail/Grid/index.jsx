import React from 'react';
import {Container ,Wrapper,WrapperImg} from './style';
// import uy from '../../../assets/imgs/uy4.png'
const Grid  = () => {
  return (
    <Container>
        <Wrapper>
          <Wrapper.Flex>
                <WrapperImg/>

                <Wrapper.Flex>
                          <Wrapper.Column>
                          <WrapperImg/>
                          <WrapperImg/>
                          </Wrapper.Column>

                          <Wrapper.Column>
                          <WrapperImg/>
                                <WrapperImg.Title>
                                  +15
                                </WrapperImg.Title>
                          </Wrapper.Column>
                      
              </Wrapper.Flex>
          </Wrapper.Flex>
        </Wrapper>         
   </Container>
  );
};

export default Grid;