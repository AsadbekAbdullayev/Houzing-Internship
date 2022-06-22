import styled from 'styled-components';
// import { ReactComponent as SimpleDimple } from '../../assets/icons/SimpleDimple.svg';

const Container = styled.div`
  width: 100%;
  background: #F5F7FC;
  display:flex;
  justify-content:center;
`;

const Wrapper = styled.div`
width: 100%;
max-width:1440px;
padding:48px 130px;
height: 500px;
`;

Wrapper.Center = styled.div`
width:100%;
display: flex;
justify-content:center;
margin:0 0 20px 0;
`;

Wrapper.Between = styled.div`
width:100%;
display: flex;
justify-content:space-between;
`;

const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #0D263B;
`;


Title.Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`;


const Card = styled.div`
position: relative;
width: 380px;
height: 197px;
background: #FFFFFF;
box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
border-radius: 3px;
padding: 40px 50px 60px 50px;
text-align:center;
`;

const DarrelImg = styled.img`
position: absolute;
width: 38px;
height: 38px;
left: 170px;
bottom: -20px;
border:1px solid #fff;
border-radius:50%;
box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`;

Card.Container = styled.div`
width: 380px;
height: 270px;
text-align:center;
`;

export { Container,Wrapper,Title,Card,DarrelImg };
