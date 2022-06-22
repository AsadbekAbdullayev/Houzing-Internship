import styled from 'styled-components';
import { ReactComponent as Icon1 } from '../../../assets/icons/icon1.svg';
import { ReactComponent as Icon2 } from '../../../assets/icons/icon2.svg';
import { ReactComponent as Icon3 } from '../../../assets/icons/icon3.svg';
import { ReactComponent as Icon4 } from '../../../assets/icons/icon4.svg';

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
height: 434px;
`;

Wrapper.Center = styled.div`
width:100%;
display: flex;
justify-content:center;
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
/* identical to box height, or 129% */

text-align: center;
letter-spacing: -0.02em;

/* text/1 */

color: #0D263B;
`;

Title.subTitle = styled.div`
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
/* identical to box height, or 156% */

text-align: center;

/* Color / 2 */
margin: 0 0 10px 0;
color: #0D263B;
`;


Title.Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #696969;
`;

const Icon = styled.div``;
Icon.Icon1 = styled(Icon1)`
width: 50px;
height:50px;
margin:0 0 20px 0;
`;
Icon.Icon2 = styled(Icon2)`width: 50px;
height:50px;
margin:0 0 20px 0;`;
Icon.Icon3 = styled(Icon3)`width: 50px;
height:50px;
margin:0 0 20px 0;`;
Icon.Icon4 = styled(Icon4)`width: 50px;
height:50px;
margin:0 0 20px 0;`;

const Card = styled.div`
width: 280px;
display: flex;
flex-direction:column;
align-items:center;
text-align:center;
/* margin:0 90px 0 0; */
`;

export { Container,Wrapper,Title,Icon,Card };
