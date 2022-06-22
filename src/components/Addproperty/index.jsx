import React,{useState} from 'react';
import { Container,Wrapper,Desc  } from './style';
import {Input,Button} from '../Generic';
import { message,Space, Spin } from 'antd';
import Footer from '../../components/Footer';
import { useMutation,useQuery } from 'react-query';
import { useNavigate ,useParams} from 'react-router';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {useHttp} from '../../hooks/useHttp';


export const Addproperty = () => {
  const { REACT_APP_BASE_URL:url } = process.env;
  const navigate = useNavigate();
  const {id} = useParams();
  const {request} = useHttp();
  const [data, setData] = useState({});

  // getSingle item

  useQuery('getSingle item',
  ()=>{
    return id && request({url:`/v1/houses/${id}`, token:true});
  },{
    onSuccess:(res) =>{
      console.log(res,'id ress');
      setData(res?.data);
    }
  }
  );


const [latitude, setLatitude] = useState(41.31133964539859);
const [longtitude, setLongtitude] = useState(69.2794418334961);
const [address,setAddress] = useState('string');
const [city,setCity] = useState('string');
const [country,setCountry] = useState('string');
const [description,setDescription] = useState('description');
const [houseDetails,setHouseDetails] = useState({
  area: 1,
  bath: 1,
  beds: 1,
  garage: 1,
  room: 1,
  yearBuilt: 1
});
const [name,setName] = useState('name');
const [price,setPrice] = useState(0);
const [salePrice,setSalePrice] = useState(0);
const [region,setRegion] = useState('string');


const Body = {

  address: 'string',
  attachments: [
    {
      imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LVOHvh7VbJ2mBwwU_NowuK5BP8KZFBv-MA&usqp=CAU'
    }
  ],
  categoryId: 0,
  city,
  componentsDto: {
    additional: 'string',
    airCondition: false,
    courtyard: false,
    furniture: false,
    gasStove: false,
    internet: false,
    tv: false
  },
  country,
  description,
  favorite: true,
  homeAmenitiesDto: {
    additional: 'string',
    busStop: false,
    garden: false,
    market: false,
    park: false,
    parking: false,
    school: false,
    stadium: false,
    subway: false,
    superMarket: false
  },
  houseDetails,
  locations: {
    latitude:latitude,
    longitude:longtitude
  },
  name,
  price,
  region,
  salePrice,
  status: true,
  zipCode: 'string'
};


  const onChange = (e) => {
    console.log(`${e.target.name } checked = ${e.target.checked} `);
  };

  const {mutate,isLoading:loadder} = useMutation(
    ()=>fetch(`${url}/v1/houses`,{
      method:'POST',
      headers:{
        'Content-type' : 'application/json',
        Authorization : `Bearer ${localStorage.getItem('token')}`
      },
      body:JSON.stringify(Body)
    }).then((res)=>res.json())
  );





const {mutate:update} = useMutation((id)=> {
 return (
   id && request({
     url:`/v1/houses/${id}`,
     method:'PUT',
     token:true,
     body:data
   })
 );
});


const Hey = ()=>{
 if(id){
   update(id,{
    onSuccess:(res) =>{
      if(res?.success){
        message.info('updated');
        navigate('/profile/myProperty');
      }
    }
   });
 }else{
  mutate('',{
    onSuccess:(res)=>{
      message.success(res?.message);
      if(res?.message == 'Successfully created.')
      navigate('/profile/myProperty');
    },
    onError:(err) =>{
      message.info('Bosh maydon qolib ketgan');
    }
  });
 }
};





const containerStyle = {
  width: '100%',
  height: '470px',
  margin:'30px 0'
};



const { isLoaded } = useJsApiLoader({
  id: 'google-map-script',
  googleMapsApiKey: 'AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4'
});

const [map, setMap] = React.useState(null);

const onLoad = React.useCallback(function callback(map) {
  const bounds = new window.google.maps.LatLngBounds(center);
  map.fitBounds(bounds);
  setMap(map);
}, []);

const onUnmount = React.useCallback(function callback(map) {
  setMap(null);
}, []);


const center = {
  lat:latitude,
  lng: longtitude
};


const hey = (e)=>{
  
  setLatitude(e.latLng.lat());
  setLongtitude(e.latLng.lng());
};


  return (<>
    <Container>
      <Wrapper>
      <Container.Title>
      Add new property
      </Container.Title>

      <Wrapper.Contact>
        <Wrapper.Title style={{margin:'0 0 30px 0'}}>Contact information</Wrapper.Title>
        
        <Wrapper.Between style={{margin:'0 0 50px 0'}}>
        <Input placeholder='Property title' name={'name'}  value={data?.name} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}}   mr={20}/>
        <Input placeholder='Property Description*' name={'description'} value={data?.description} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) : ({target :{value,name}})=>{Body[`${name}`]=value;}}/>
        </Wrapper.Between>


      </Wrapper.Contact>

      <Wrapper.Additional>
      <Wrapper.Title style={{margin:'0 0 30px 0'}}>Additional</Wrapper.Title>

    <Wrapper.Between>
    <Input placeholder='Beds' name={'beds'} value={data?.houseDetails?.beds} onChange={id ? ({target :{value,name}})=>setData({...data, [houseDetails.beds]:value}) : ({target :{value,name}})=>{Body.houseDetails[`${name}`]=value;}} mr={20}/>
    <Input placeholder='Baths' name={'bath'} value={data?.houseDetails?.bath} onChange={id ? ({target :{value,name}})=>setData({...data, [houseDetails.beds]:value}) : ({target :{value,name}})=>{Body.houseDetails[`${name}`]=value;}} mr={20}/>
    <Input placeholder='garage' name={'garage'} value={data?.houseDetails?.garage} onChange={id ? ({target :{value,name}})=>setData({...data, [houseDetails.beds]:value}) : ({target :{value,name}})=>{Body.houseDetails[`${name}`]=value;}} />
    </Wrapper.Between>

    <Wrapper.Between>
    <Input placeholder='Rooms' name={'room'}  value={data?.houseDetails?.room} onChange={id ? ({target :{value,name}})=>setData({...data, [houseDetails.beds]:value}) : ({target :{value,name}})=>{Body.houseDetails[`${name}`]=value;}} mr={20}/>
    <Input placeholder='Year bulid '  name={'yearBuilt'} value={data?.houseDetails?.yearBuilt} onChange={id ? ({target :{value,name}})=>setData({...data, [houseDetails.beds]:value}) : ({target :{value,name}})=>{Body.houseDetails[`${name}`]=value;}}  mr={20}/>
    <Input placeholder='Home area (sqft)'  name={'area'}  value={data?.houseDetails?.area} onChange={id ? ({target :{value,name}})=>setData({...data, [houseDetails.beds]:value}) : ({target :{value,name}})=>{Body.houseDetails[`${name}`]=value;}} />
    </Wrapper.Between>

      </Wrapper.Additional>

    <Wrapper.Price>
      
    <Wrapper.Title style={{margin:'0 0 30px 0'}}>Price</Wrapper.Title>

    <Wrapper.Between>
    <Input placeholder='Price ($)' name={'price'}  value={data?.price} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}} mr={20}/>
    <Input placeholder='salePrice' name={'salePrice'}  value={data?.salePrice} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}}/>
    </Wrapper.Between>

    </Wrapper.Price>

    <Wrapper.Location>
    <Wrapper.Title style={{margin:'0 0 30px 0'}}>Location</Wrapper.Title>
    <Wrapper.Between>
    <Input placeholder='Regions' name={'region'} value={data?.region} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}} mr={20}/>
    <Input placeholder='Friendly address' name={'address'} value={data?.address} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}} />
    </Wrapper.Between>

    <Wrapper.Between>

    <Input placeholder='City ' name={'city'} value={data?.city} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}} mr={20}/>
    <Input placeholder='country '  name={'country'}  value={data?.country} onChange={id ? ({target :{value,name}})=>setData({...data, [name]:value}) :({target :{value,name}})=>{Body[`${name}`]=value;}} />
    </Wrapper.Between>

    { 
      isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
          onLoad={onLoad}
          onUnmount={onUnmount}
          onClick={hey}
        >
          <></>
        </GoogleMap>
    ) : <></>
  
    }

        

  

    </Wrapper.Location>
{/* media */}
    <Wrapper.Media>

    <Wrapper.Title style={{margin:'0 0 40px 0'}}>Media</Wrapper.Title>
    <Desc style={{margin:'0 0 20px 0'}}>Featured image</Desc>
   
    <Input placeholder='image url' mb={20}/>
    
    </Wrapper.Media>

<Wrapper.FlexEnd>
    <Button type={'primary'} width={'280px'} onClick={Hey}>{loadder && <Space size="large">
    <Spin />
  </Space>}Submit</Button>
    </Wrapper.FlexEnd>

      </Wrapper>
    </Container>
    <Footer/>
    </>
  );
};

export default Addproperty;
