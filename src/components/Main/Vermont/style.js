import styled from 'styled-components';
// import { ReactComponent as SimpleDimple } from '../../assets/icons/SimpleDimple.svg';
import img2 from '../../../assets/imgs/uy2.png';

const Container = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  margin:90px 0 40px 0;
`;

const Wrapper = styled.div`
  width:100%;
  height: 571px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${img2});
  display: flex;
  flex-direction:column;
  align-items:center;
justify-content:center;
`;

Wrapper.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
`;

export { Container,Wrapper };
