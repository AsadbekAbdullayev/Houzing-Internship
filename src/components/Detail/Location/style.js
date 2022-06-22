import styled from 'styled-components';
import { ReactComponent as bed } from '../../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../../assets/icons/garage.svg';
import { ReactComponent as ruler } from '../../../assets/icons/ruler.svg';
import { ReactComponent as love } from '../../../assets/icons/love.svg';
import { ReactComponent as resize } from '../../../assets/icons/resize.svg';

const Container = styled.div`
  width: 100%;
  margin:50px 0 0 0;
`;

Container.Line = styled.div`
width:100%;
height:1px;
background:#E6E9EC;
margin: 50px 0;
`;


const Wrapper = styled.div`
width: 100%;
display:flex;
justify-content:space-between;
`;

Wrapper.Left = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:flex-end;
`;

Wrapper.Flex = styled.div`
width:fit-content;
display:flex;
align-items:center;
`;

Wrapper.Between = styled.div`
width: 100%;
display:flex;
align-items:center;
justify-content:space-between;
margin: 0 0 25px 0;
`;


const Icons = styled.div``;


Icons.Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin:${({M})=>M ? '0 25px 0 0' : ''};
`;

  
  Icons.Bed = styled(bed)`
  margin:0 10px 0 0;`;

Icons.Bath = styled(bath)`
margin:0 10px 0 0;`;

Icons.Garage = styled(garage)`
margin:0 10px 0 0;`;

Icons.Ruler = styled(ruler)`
margin:0 10px 0 0;`;

Icons.Resize = styled(resize)`
margin:0 10px 0 0;
  cursor: pointer;
`;

Icons.Love = styled(love)`
  width: 10px;
  height: 10px;
 
`;

Icons.LoveB = styled.div`
  width: 25px;
  height: 25px;
  background: #f6f8f9;
  border-radius:50%;
  display: flex;
  justify-content: center;
  align-items:center;
  margin:0 10px 0 0;
`;  



const Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
letter-spacing: -0.02em;
color: #0D263B;
`;


const Title1 = styled.div`
 font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #0D263B;
margin:0 7px 0 0;
`;


const Desc = styled.div`
  display: flex;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* line-height: 24px; */
  color: #696969;
`;

Desc.D = styled.div`
font-weight: 600;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.01em;
text-decoration-line: underline;
text-transform: uppercase;
color: #0061DF;
margin:0 0 0 24px;
`;


export { Container,Icons,Wrapper,Desc,Title1,Title };


