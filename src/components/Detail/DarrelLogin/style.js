import styled from 'styled-components';
import Darrel from '../../../assets/imgs/darrel.png';

const Container = styled.div`
  width: 280px;
  height: 400px;
  border: 1px solid #E6E9EC;
  border-radius: 3px;
  padding:24px;
  .div{
    margin:0 0 26px 0;
  }
`;

Container.Column = styled.div`
width: fit-content;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
`;

Container.Flex = styled.div`
width: 100%;
display:flex;
align-items:center;
`;

Container.Image = styled.div`
width: 53px;
height: 53px;
background-repeat:no-repeat;
background: url(${Darrel});
border-radius:50%;
box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
margin: 0 10px 0 0;
border:1px solid #Fff;
`;

Container.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`;

Container.Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`;

export { Container };
