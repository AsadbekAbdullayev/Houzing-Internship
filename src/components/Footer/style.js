import styled from 'styled-components';
import { ReactComponent as bed } from '../../assets/icons/bed.svg';
import { ReactComponent as logoIcon } from '../../assets/icons/logo.svg';

const Logo = styled.div`
width: fit-content;
height: 68px;
  display: flex;
  align-items: center;
`;

Logo.Icon = styled(logoIcon)`margin:0 10px 0 0;`;

const Container = styled.div`
position:relative;
width:100%;
height: 417px;
background: #0D263B;
display: flex;
flex-direction:column;
align-items:center;
`;

const  Wrapper = styled.div`
width:100%;
max-width: 1440px;
padding: 50px 130px 0 130px;

`;

Wrapper.Between = styled.div`
width:100%;
display:flex;
justify-content:space-between;

`;

Wrapper.Column = styled.div`
width:fit-content;
`;

Wrapper.Flex = styled.div`
width:fit-content;
height:fit-content;
display: flex;
align-items:center;
margin:0 0 20px 0;
`;



Wrapper.Text = styled.div`
width: 236px;
display: flex;
flex-direction:column;
justify-content:center;
`;


const Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin:${({m})=>!m ? '0 0 32px 0' : ''};
`;

const Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
`;

Container.Line = styled.div`
width:100%;
height:1px;
background: rgba(255, 255, 255, 0.15);
position:absolute;
bottom:68px;
left:0px;
`;

const Icon = styled.div``;


Icon.Bed = styled(bed)`
margin:0 20px 0 0;
path{
  fill:#FFF;
}
`;

export { Container,Title,Desc,Wrapper,Icon,Logo };
