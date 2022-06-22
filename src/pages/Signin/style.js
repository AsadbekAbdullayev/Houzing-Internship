import styled from 'styled-components';

const Container = styled.div`
display:flex;
width:100%;
justify-content:center;
margin:64px 0;
`;


const Wrapper = styled.div`
width: 580px;
height: 376px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding:24px 30px;
`;

Container.Between = styled.div`
width: 100%;
display: flex;
justify-content:space-between;
margin:20px 0 ;
`;

Container.title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
`;

Container.desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`;

Container.Link = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration-line: underline;
color: #0061DF;
`;



export {Container,Wrapper};