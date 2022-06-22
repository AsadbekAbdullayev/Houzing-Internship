import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { useRequest } from '../../hooks/useRequest';
import { useSearch } from '../../hooks/useSearch';
import Filter from '../Filter';
import HouseCard from '../HouseCard';
import { Container, Title, Wrapper } from './style';
import Footer from '../Footer';


export const Proporties = () => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('Proporties');
  const query = useSearch();
  const { request } = useRequest();
  const { search } = useLocation();

// console.log(query.get('city'),'category_idmas cityyyyyy');

  
  useQuery(
    ['getHouses', search],
    () => request({ url: `/v1/houses/list${search || '?'}` }),
    {
      onSuccess: (res) => {
        setData(res?.data || []);
      },
      onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

 const { isLoading,isRefetching} = useQuery(
    ['geCategoryId'],
    () => query.get('category_id') && fetch(`https://houzing-app.herokuapp.com/api/v1/categories/${query.get('category_id')}`,{
      metod:'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    }).then(res => res.json()),
    {
      onSuccess: (res) => {
setTitle(res?.data?.name);
      },
      onError: (err) => console.log(err, 'err'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );









  

  return (
    <Container>
      <Filter />
      <div className='title center'>{
        isLoading || isRefetching ? 'Loadig...' : ( title || 'Propertes')
      }
        </div>
      <div className='description center'>
        Siz orzu qilgan, siz izlagan shinam va arzon uylar.
      </div>
      <Title className='description'>
        Total: <div className='subTitle'>{data?.length}</div>{' '}
      </Title>
      <Wrapper>
        {data.length ? (
          data.map((uy, index) => {
            return <HouseCard key={index} info={uy} />;
          })
        ) : (
          <div className='title center'>No Data Found</div>
        )}

      </Wrapper>
      <Footer/>
    </Container>
  );
};

export default Proporties;
