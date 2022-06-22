/* eslint-disable react/jsx-key */
import React, { useState,useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import {useQuery} from 'react-query';
import Card from '../Card';
import { useNavigate } from 'react-router';
// import {request} from '../../../hooks/useRequest';
// import useReplace from '../../../hooks/useReplace';
import { ArrowLeft, ArrowRight, Cards, Container, Wrapper } from './style';

export const Generic = () => {
  const [cat,setCat] = useState([]);
  const slider = useRef();
  const navigate = useNavigate();
  const { REACT_APP_BASE_URL:url } = process.env;

const toCategory = (id)=>{
  navigate(`/properties?category_id=${id}`);
};

  useQuery(
    'categories',
    () => {
      return fetch('https://houzing-app.herokuapp.com/api/v1/categories/list').then(res=>res.json());
    },
    {
      onSuccess: (res) => {
        setCat(res?.data.map(({name,id})=><Card onClick={()=>toCategory(id)} title={name} key={id}  />) || []);
      },
      onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
    
  );

// const newItems = data.map((v,i)=><HouseCard key={i} info={v} margin />);


  // const items = [
  //   <Card  />,
  //   <Card  />,
  //   <Card  />,
  //   <Card  />,
  //   <Card  />,
  //   <Card  />,
  //   <Card  />
  // ];

  return (
    <Container className='nocopy'>
      <div className='title center'>Category</div>
      <div className='description center'>
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Wrapper>
        <Cards>
          <AliceCarousel
            arrows={false}
            ref={slider}
            autoWidth
            mouseTracking
            items={cat}
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

export default Generic;
