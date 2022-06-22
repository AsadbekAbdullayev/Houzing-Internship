import React, { useState,useRef }  from 'react';
import { Popover } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {useQuery} from 'react-query';
import { Button, Input } from '../Generic';
import { Container, Icon, Wrapper, Advanced, Section } from './style';
import useSearch from '../../hooks/useSearch';
import useReplace from '../../hooks/useReplace';
import { Select } from 'antd';
export const Generic = () => {


  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const query = useSearch();
  const cuntryRef = useRef('');
  const regionRef = useRef('');
  const cityRef = useRef('');
  const zipRef = useRef('');
  const roomRef = useRef('');
  const addressRef = useRef('');
  const houseNameRef = useRef('');
  const minPriceRef = useRef('');
  const maxPriceRef = useRef('');
  const { Option } = Select;
  const [Cat,setCat] = useState([]);

  // const searchQuery = [
  //   { key: 'country', value: cuntryRef },
  //   { key: 'city', value: cityRef },
  //   { key: 'min_price', value: minPriceRef },
  //   { key: 'max_price', value: maxPriceRef },
  //   { key: 'region', value: regionRef },
  //   { key: 'room', value: roomRef },
  //   { key: 'zip_code', value: zipRef },
  //   { key: 'address', value: addressRef },
  //   { key: 'house_name', value: houseNameRef },
  // ];

  const onSearch = () => {
    // console.log(searchQuery);
    // navigate()

  };

  const onChange = ({target}) => {

    const { value,name } = target;
    navigate(`${pathname}${useReplace(`${name}`, value)}`);
  };


  useQuery(
    'categoriesList',
    () => {
      return fetch('https://houzing-app.herokuapp.com/api/v1/categories/list').then(res=>res.json());
    },
    {
      onSuccess: (res) => {
        setCat(res?.data || []);
        // console.log(res,'hey1');
        // console.log(Cat,'hey2');
      },
    
      onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
    
  );



  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input ref={cuntryRef} mr={20} placeholder='Country' name={'country'} onChange={onChange}/>
        <Input ref={regionRef} mr={20} placeholder='Region' name={'region'} onChange={onChange}/>
        <Input
          name='city'
          defaultValue={query.get('city')}
          ref={cityRef}
          mr={20}
          onChange={onChange}
          placeholder='City'
        />
        <Input ref={zipRef} mr={20} placeholder='Zip Code' name={'zip_code'} onChange={onChange}/>
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input ref={addressRef} mr={20} placeholder='Adress' name={'adress'} onChange={onChange}/>
        <Input ref={houseNameRef} mr={20} placeholder='House Name' name={'house_name'} onChange={onChange}/>
        <Input ref={roomRef} mr={20} placeholder='Rooms' name={'rooms'} onChange={onChange}/>
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input ref={minPriceRef} mr={20} placeholder='Min price' name={'min_price'} onChange={onChange}/>
        <Input ref={maxPriceRef} mr={20} placeholder='Max price' name={'max_price'} onChange={onChange}/>

          <Select defaultValue="lucy" style={{ width: 320 }} size='large' onChange={handleChange}>
      {
        Cat.map(({name,id})=><Option value={name} key={id}>Jack</Option>

        )
      }
          </Select>
   

      </Section>
      <Section>
        <Button width='131px' ml={20} type='secondary'>
          Cancel
        </Button>
        <Button width='131px' ml={20} type='primary' onClick={onSearch}>
          Search
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <Container>
      <Wrapper>
        <Input
          pl='42px'
          placeholder='Enter an address, neighborhood, city, or ZIP code'
        >
          <Icon.Home />
        </Input>
        <Popover
          placement='bottomRight'
          content={advancedSearch}
          trigger='click'
        >
          <Button width='131px' ml={20} type='secondary'>
            <Icon.Setting /> Advanced
          </Button>
        </Popover>
        <Button width='131px' ml={20} type='primary' onClick={onSearch}>
          <Icon.Search /> Search
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Generic;
