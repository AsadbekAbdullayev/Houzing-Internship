import React from 'react';
import { Container } from './style';
import Input from '../../../components/Generic/Input';
import Button from '../../../components/Generic/Button';
export const DarrelLogin = () => {
  return (
    <Container>
      <Container.Flex style={{margin: '0 0 5px 0'}}>

      <Container.Image/>
      
      <Container.Column>

        <Container.Title>
        Darrel Steward
        </Container.Title>

        <Container.Desc>
        (123)456-7890
        </Container.Desc>

      </Container.Column>

      </Container.Flex>

      <Input placeholder='Name' mb='10' mt='10' />
      <Input placeholder='Phone' mb='10'/>
      <Input placeholder='Email' mb='10'/>
      <Input placeholder='Massage' mb='30'/>
      
      <Button type='primary'>
      Send request
      </Button>
    </Container>
  );
};

export default DarrelLogin;
