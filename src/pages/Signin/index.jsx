import React,{useState} from 'react';
import {Container,Wrapper} from './style';
import Footer from '../../components/Footer';
import { Input,Button} from '../../components/Generic';
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router';
import {useMutation} from 'react-query';

const {REACT_APP_BASE_URL:url} = process.env;
export const Signin = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const onChecked = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

const {mutate} =useMutation('test',()=>{
  return fetch(`${url}/public/auth/login`,{
    method:'POST',
    headers:{
      'Content-Type':'Application/json',
    },
    body:JSON.stringify({
      email,
      password
    })
  }).then((res) => res.json());
});

const onSubmit = () =>{
mutate({},{onSuccess:(res)=>{
  if(res?.authenticationToken){
    localStorage.setItem('token',res?.authenticationToken);
    navigate('/home');
    // console.log(res?.authenticationToken,'tokennn');
  }
},
onError:(err) =>console.log(err,'errror')
});
};

// const Fn = (name) =>{
//   const name1 = name.split(' ');
//   const name2 = name1.map((v)=>v.replace(`${v[0]}`, `${v[0].toUpperCase()}`));
// console.log(name2.join(' '));
// };

 // Fn('sardor al bew');

// const sevenBoom = (arr) =>{
//   let count =0;
// for (let i = 0; i < arr.length; i++) {
//   let newArr = arr[i] + '';
//   for(let j = 0; j < newArr.length; j++){
//     if(newArr[j]==7)
//       count++;
//   }

// }
//   if(count>0){
//     console.log('boom');
//   }else{
//     console.log('there is no 7 in the array');

//   }
// };

// sevenBoom([1, 2, 3, 4, 5, 6, 17]);

  return <>
  <Container>

    <Wrapper>
      <Container.title>Sign in</Container.title>
      <Input mt={60} placeholder='Email' onChange={({ target :{value}})=>setEmail(value)} name='email'/>
      <Input mt={40} placeholder='Password' onChange={({ target :{value}})=>setPassword(value)} name='passwword'/>

      <Container.Between>
      <Checkbox onChange={onChecked}>
        <Container.desc>
        Remember me
        </Container.desc>
      </Checkbox>

<Container.Link>Forgot</Container.Link>
      </Container.Between>
      <Button type={'primary'} onClick={onSubmit}>Login</Button>
    </Wrapper>

  </Container>
  <Footer/>
  </>;
};



export default Signin;
