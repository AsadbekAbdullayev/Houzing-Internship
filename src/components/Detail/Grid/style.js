import styled from 'styled-components';
import uy from '../../../assets/imgs/uy4.png';

const Container = styled.div`
width:100%;
height: 400px;
display: flex;
margin:0 0 25px;
display:flex;
justify-content:center;
`;

const Wrapper = styled.div`
width:100%;
max-width:1440px;
display:flex;
flex-direction:column;
padding:0 130px;
gap:20px;
`;

Wrapper.Flex = styled.div`
flex:1;
height: 100%;
display: flex;
gap:20px;
`;

Wrapper.Column = styled.div`
flex:1;
height: 100%;
display: flex;
flex-direction:column;
gap:20px;
`;



const WrapperImg = styled.div`
/* width: 100%; */
height: 100%;
flex: 1;
background-image:url(${uy});
background-size:cover;
`;
 WrapperImg.Title = styled.div`
height: 100%;
flex: 1;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${uy});
background-size:cover;
display: flex;
justify-content:center;
align-items:center;
font-weight: 600;
font-size: 46px;
line-height: 44px;
letter-spacing: -0.02em;
color: #FFFFFF;

`;


export {Container,Wrapper,WrapperImg};