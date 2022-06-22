/* eslint-disable react/jsx-key */
import React, { useRef,useState } from 'react';
import HouseCard from '../../HouseCard';
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style';
import AliceCarousel from 'react-alice-carousel';
import {useQuery} from 'react-query';
import {request} from '../../../hooks/useRequest';
export const Recent = () => {
  const [data,setData] = useState([]);
  const slider = useRef();
const { REACT_APP_BASE_URL:url } = process.env;
  useQuery(
    'houses',
    () => {
      return fetch(`${url}/v1/houses/list`).then(res=>res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
      onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
    
  );

const newItems = data.map((v)=><HouseCard key={v.id} info={v} margin />);


  const items = [
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />,
    <HouseCard margin />
  ];

  return (
    <Container className='nocopy'>
      <div className='title center'>Recent Properties for Rent</div>
      <div className='description center'>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={newItems}
          />
          <ArrowRight onClick={() => slider.current?.slidePrev()}>
            &lang;
          </ArrowRight>
          <ArrowLeft onClick={() => slider.current?.slideNext()}>
            &rang;
          </ArrowLeft>
        </Cards>
      </Wrapper>
    </Container>
  );
};

export default Recent;
