import React from 'react';
import MapComponent from '../Map';
import { Container,Title1,Icons,Wrapper,Desc,Title } from './style';

export const Location = () => {
  return (
    <Container>
     <Title style={{margin:'0 0 25px 0'}}> Location </Title>
     <Wrapper.Between >
       <Wrapper.Flex>
         <Title1>Address:</Title1><Desc>329 Queensberry Street</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Title1>City:</Title1><Desc>Jersey City</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Title1>Area:</Title1><Desc>Greenville</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

     <Wrapper.Between style={{margin:'25px 0'}}>
       <Wrapper.Flex>
         <Title1>State/County:</Title1><Desc>Washington</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Title1>Zip:</Title1><Desc>365448</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Title1>Country:</Title1><Desc>United States</Desc>
       </Wrapper.Flex>

     </Wrapper.Between>
     
     <MapComponent/>

     <Container.Line/>

     <Title style={{margin:'0 0 25px 0'}}> Property Details </Title>

     <Wrapper.Between style={{margin:'0 0 25px 0'}}>
       <Wrapper.Flex>
         <Title1>Property ID:</Title1><Desc>HZ27</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Title1>Bedrooms::</Title1><Desc>8</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Title1>Property Type:</Title1><Desc>Apartment</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between >

     <Wrapper.Between style={{margin:'0 0 25px 0'}}>
       <Wrapper.Flex>
         <Title1>Price:</Title1><Desc>$130.000</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Title1>Bedrooms::</Title1><Desc>8</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Title1>Property Type:</Title1><Desc>Apartment</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

     <Wrapper.Between style={{margin:'0 0 25px 0'}}>
       <Wrapper.Flex>
         <Title1>Property Size:</Title1><Desc>HZ27</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Title1>Garage:</Title1><Desc>2</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Title1>Property Type:</Title1><Desc>Apartment</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

     <Container.Line/>

     <Title style={{margin:'0 0 25px 0'}}> Features </Title>
     <Wrapper.Between style={{margin:'0 0 25px 0'}}>
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

    

     <Wrapper.Between>
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

     <Wrapper.Between>
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

       <Wrapper.Between >
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
       
       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>

       <Wrapper.Flex>
       <Icons.LoveB> <Icons.Love/></Icons.LoveB> <Desc>Microwave</Desc>
       </Wrapper.Flex>
     
     </Wrapper.Between>

     <Container.Line/>


    </Container>
  );
};

export default Location;
