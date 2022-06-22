import styled from 'styled-components';
// import { ReactComponent as SimpleDimple } from '../../assets/icons/SimpleDimple.svg';

const Container = styled.div`
  width:100%;
  display: flex;
  flex-direction:column;
  align-items:center;
  margin:30px 0 60px 0;
`;

const Wrapper = styled.div`
width: 100%;
max-width: 1180px;
`;

Container.Title = styled.div`

font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #0D263B;
margin: 0 0 32px 0;
`;

Wrapper.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
color: #0D263B;
`;

Wrapper.Between = styled.div`
width: 100%;
display: flex;
/* justify-content:space-between; */
margin: 0 0 40px 0;
`;

Wrapper.Image = styled.div`
width: 150px;
height: 150px;
margin:0 20px 0 0;
background: #C4C4C4;
border-radius: 3px;
`;

const WrapButton = styled.button`
width: 150px;
height: 44px;
display: flex;
justify-content: center;
align-items: center;
padding: 12px 40px;
border: 1px solid #0061DF;
border-radius: 2px;
background: #fff;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #0061DF;
margin:0 0 40px 0;
`;


const Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
margin: 0 0 24px 0;
`;

Wrapper.Contact = styled.div`
width: 1180px;
background: #FFFFFF;
padding:24px 30px;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin:0 0 30px 0;
`;

Wrapper.Additional = styled.div`
width: 1180px;
padding:24px 30px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
margin:0 0 30px 0;

`;

Wrapper.Price = styled.div`
width: 1180px;
height: 200px;
padding:24px 30px;
margin:0 0 30px 0;

background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
`;

Wrapper.Location = styled.div`
width: 1180px;
height: 815px;
padding:24px 30px;
margin:0 0 30px 0;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
`;

Wrapper.Map = styled.div`
width: 100%;
height: 470px;
margin:30px 0;
background:violet;
`;

Wrapper.Media = styled.div`
width: 1180px;
background: #FFFFFF;
padding:24px 30px;

border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
margin:0 0 30px 0;
border-radius: 3px;
`;

Wrapper.Amenities = styled.div`
width: 1180px;
height: 340px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
margin:0 0 30px 0;
padding:24px 30px;

border-radius: 3px;
`;

Wrapper.Energy = styled.div`
width: 1180px;
height: 170px;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
margin:0 0 30px 0;
padding:24px 30px;
border-radius: 3px;
`;

Wrapper.Checkbox = styled.div`
width: 220px;
`;
Wrapper.FlexEnd = styled.div`
width:100%;
display: flex;
justify-content:flex-end
`;

export { Container,Wrapper,Desc,WrapButton};
