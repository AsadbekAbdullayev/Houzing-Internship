import React,{useState} from 'react';
import {Container,Wrapper,Table,Icon} from './style';
import Footer from '../../components/Footer';
import {Input,Button } from '../../components/Generic';
import { useQuery } from 'react-query';
import noimage from '../../assets/imgs/noimg.jpg';
import {useNavigate} from 'react-router-dom';
import {useMutation} from 'react-query';
import {message, Space, Spin } from 'antd';
export const Generic = () => {
const navigate =useNavigate();
  const [data,setData] = useState([]);
  const { REACT_APP_BASE_URL:url } = process.env;

const onEdit = (id)=>{
  navigate(`/profile/addProperty/${id}`);
};


 const {refetch,isLoading} = useQuery(
    'meHouses',
    () => {
      return fetch(`${url}/v1/houses/me`,{
        metod:'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      }).then(res=>res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
        // console.log(res?.data, 'v1/houses/me');
      },
      onError: (err) => console.log(err, 'v1/houses/me'),
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
    
  );

  const {mutate} =useMutation((id)=>{
    return fetch(`${url}/v1/houses/${id}`,{
      method:'DELETE',
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => res.json());
  });

  const Delete = (id)=>{

mutate(id,{
  onSuccess:(res)=>{
    if(res?.success){
      message.info('deleted');
      refetch();
    }
  }
});




    // fetch(`${url}/v1/houses/${id}`,{
    //   method:'DELETE',
    //   headers:{
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   }
    // }).then((res) => res.json());
    
    


    // fetch(`${url}/v1/houses/me`,{
    //   metod:'get',
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem('token')}`
    // },
    // }).then(res=>res.json()).then((result)=>setData(result?.data));

  };
  return <>
  <Container>

    <Wrapper>
      <Wrapper.Between style={{margin:'20px 0'}}>
<Input placeholder='Search' width={'200px'} mr={20}/> 
{isLoading && <Space size="middle">
    <Spin />
  </Space>}

<Button width={'200px'} type={'primary'} mr={20} onClick={()=>navigate('/profile/addProperty')}>Add House </Button>

<Container.Title > 

MyProperties
</Container.Title>


      </Wrapper.Between>

      <Wrapper.Card>

        <Table>
          <Table.THEAD>

            <Table.TR>

            <Table.THimage>
            <Wrapper.Title>
            Listing Title
              </Wrapper.Title>
            </Table.THimage>

            <Table.TH>
            <Wrapper.Title>
            Date Published
              </Wrapper.Title>
            </Table.TH>
            <Table.TH>
            <Wrapper.Title>
            Status
              </Wrapper.Title>
            </Table.TH>
            <Table.TH>
            <Wrapper.Title>
            View
              </Wrapper.Title>
            </Table.TH>
            <Table.TH>
            <Wrapper.Title>
            Action
              </Wrapper.Title>
            </Table.TH>

            </Table.TR>

          </Table.THEAD>


          <Table.TBODY>

            { data.map(({id,attachments,name,description,salePrice,price})=>

            
            <Table.TR key={id}>
              <Table.TDimage>

                <Wrapper.imageContainer>
              <Wrapper.image src={attachments[0]?.imgPath || noimage} alt='house image'/>
              <Wrapper.feature>
              FEATURED
              </Wrapper.feature>
              </Wrapper.imageContainer>

               <Wrapper.Column>

              <Wrapper.Flex>
              <Wrapper.Title>
              {name}
              </Wrapper.Title>
                <Wrapper.forSale>FOR SALE</Wrapper.forSale>
              </Wrapper.Flex>
              <Wrapper.Desc style={{margin:'0 0 25px 0'}}>
              {description}
              </Wrapper.Desc>
              <Wrapper.Del>
              ${price}
              </Wrapper.Del>
              
              <Wrapper.Title>
              ${salePrice}
              </Wrapper.Title>

              </Wrapper.Column>

              </Table.TDimage>

              <Table.TD>
              <Wrapper.Desc>
              30 December 2022
              </Wrapper.Desc>
              </Table.TD>

              <Table.TD>
              <Wrapper.Desc>
              Pending
              </Wrapper.Desc>
              </Table.TD>
              <Table.TD>
              <Wrapper.Desc>
              5933
              </Wrapper.Desc>
              </Table.TD>

              <Table.TD>
                <Wrapper.Flex>
              <Icon.Pen onClick={()=>onEdit(id)}/>
              <Icon.Con>
              <Icon.Axlat onClick={()=>Delete(id)}/>
              </Icon.Con>

              </Wrapper.Flex>

              </Table.TD>
            </Table.TR>
            )}

           
          </Table.TBODY>

        </Table>

      </Wrapper.Card>
    </Wrapper>
  </Container>

  <Footer/>
  </>;
};

export default Generic;
