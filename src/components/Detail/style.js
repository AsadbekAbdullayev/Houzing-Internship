import styled from 'styled-components';


const Container = styled.div`
width:100%;
margin:25px 0;
display:flex;
flex-direction:column;
align-items:center;
`;

const Wrapper = styled.div` 
width:100%;
max-width:1440px;
padding:0 130px;
gap:20px;
display:flex;
justify-content:space-between;
`;

const LoadingImage = styled.img`
width: 200px;
height:200px;
position:center;
top:200px;
`;

export {Container,Wrapper,LoadingImage};