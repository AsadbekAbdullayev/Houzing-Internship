import React, { useState } from 'react';
import { Container,Icons,Wrapper,Desc,Title } from './style';
import Location from '../Location';
import useSearch from '../../../hooks/useSearch';
import { useQuery } from 'react-query';

export const Details = () => {
  const [data, setData] = useState({});
  const query = useSearch();
  // console.log(data);
  const { isLoading,isRefetching} = useQuery(
    ['getHouseId'],
    () => query.get('house_id') && fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${query.get('house_id')}`,{
      metod:'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }).then(res => res.json()),
    {
      onSuccess: (res) => {
        setData(res?.data);
        
      },
      onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

 
  return (
    <Container>
      <Wrapper>
        <Title>
        {data?.description || 'description'}
        </Title>
        <Icons.Wrapper>
          <Icons.LoveB>
          <Icons.Love/>
          </Icons.LoveB>
          <Desc>Save</Desc>
        </Icons.Wrapper>
      </Wrapper>

      <Wrapper>
        <Desc style={{margin:'5px 0'}}>
        Quincy St, Brooklyn, NY, USA
        </Desc>
      </Wrapper>

      <Wrapper.Left>
        <Desc style={{margin:'0 10px',textDecoration:''}}>
        $2,800/mo
        </Desc> 
        <Title>
        $7,500/mo
        </Title>
      </Wrapper.Left>

      <Wrapper>
        <Wrapper.Flex>
          <Icons.Wrapper M>
            <Icons.Bed/><Desc>4 Beds</Desc>
          </Icons.Wrapper>
          <Icons.Wrapper M>
            <Icons.Bath/><Desc>4 Baths</Desc>
          </Icons.Wrapper>
          <Icons.Wrapper M>
            <Icons.Garage/><Desc>4 Garageeds</Desc>
          </Icons.Wrapper>
          <Icons.Wrapper M>
            <Icons.Resize/><Desc>4 Sq Ft</Desc>
          </Icons.Wrapper>
          <Icons.Wrapper M>
            <Icons.Ruler/><Desc>Year Built: 4</Desc>
          </Icons.Wrapper>
        </Wrapper.Flex>

        <Desc>
        Est. Mortgage
        </Desc>
      </Wrapper>
      <Title style={{margin:'50px 0 16px 0'}}>
      Description
      </Title>

      <Desc>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, 
        hic ullam numquam repudiandae non excepturi voluptate, accusantium alias 
        sequi officia rerum inventore illo quibusdam provident? Ipsum expedita earum
         debitis magni? Quisquam voluptatibus excepturi officia fuga. Optio, ad ipsum nisi tenetur,
         enim sed, repellendus aliquam provident doloremque sequi unde totam quo.
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, 
        hic ullam numquam repudiandae non excepturi voluptate, accusantium alias 
        sequi officia rerum inventore illo quibusdam provident? Ipsum expedita earum
         debitis magni? Quisquam voluptatibus excepturi officia fuga. Optio, ad ipsum nisi tenetur,
         enim sed, repellendus aliquam provident doloremque sequi unde totam quo.
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, 
        hic ullam numquam repudiandae non excepturi voluptate, accusantium alias 
        sequi officia rerum inventore illo quibusdam provident? Ipsum expedita earum
         debitis magni? Quisquam voluptatibus excepturi officia fuga. Optio,tur,       
        </Desc>

        <Title style={{margin:'55px 0 16px 0'}}>
      Description
       </Title>

<Wrapper.Flex style={{margin:'0 0 40px 0'}}>
<Icons.Wrapper M='60px'>
  <Desc>
  test_property.pdf
  </Desc>
  <Desc.D>
  DOWNLOAD
  </Desc.D>
</Icons.Wrapper>

<Icons.Wrapper M='60px'>
  <Desc>
  test_property.pdf
  </Desc>
  <Desc.D>
  DOWNLOAD
  </Desc.D>
</Icons.Wrapper>

<Icons.Wrapper M='60px'>
  <Desc>
  test_property.pdf
  </Desc>
  <Desc.D>
  DOWNLOAD
  </Desc.D>
</Icons.Wrapper>

{/* <Icons.Wrapper M='50px'>
  <Desc>
  test_property.pdf
  </Desc>
  <Desc.D>
  DOWNLOAD
  </Desc.D>
</Icons.Wrapper> */}


</Wrapper.Flex>

    <Container.Line/>
    <Location/>
    </Container>
  );
};

export default Details;
