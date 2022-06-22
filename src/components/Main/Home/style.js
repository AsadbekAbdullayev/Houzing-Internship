import styled from 'styled-components';
import { Carousel } from 'antd';
import { ReactComponent as arrow } from '../../../assets/icons/carouselArrow.svg';
import { ReactComponent as bed } from '../../../assets/icons/bed.svg';
import { ReactComponent as bath } from '../../../assets/icons/bath.svg';
import { ReactComponent as garage } from '../../../assets/icons/garage.svg';
import { ReactComponent as ruler } from '../../../assets/icons/ruler.svg';
const CarouselWrapper = styled('div')`
  position: relative;
`;
const MainCarousel = styled(Carousel)`
  height: fit-content;
  /* height: 570px; */
  position: relative;
`;


const Title = styled.div`
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
letter-spacing: -0.02em;
color: #fff;
`;

Title.Container = styled.div`
position: absolute;
left: 35%;
top: 25%;
width: fit-content;
display: flex;
flex-direction:column;
align-items:center;
`;

Title.price = styled.div`
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.02em;
color: #FFFFFF;
margin:30px 0;
`;


Title.Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
margin:7px 0 0 0;

`;

const Img = styled.img`
  background: rgba(0, 0, 0, 0.65);
  width: 100%;
`;
const Icon = styled.div``;

Icon.Left = styled(arrow)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translate(100%, -50%);
  width: 45px;
  height: 45px;
  color: white;
  background: white;
  padding: 12px;
  opacity: 0.5;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;
Icon.Right = styled(arrow)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 0px;
  transform: translate(-100%, -40%) rotate(180deg);
  /* transform: rotate(90deg); */
  width: 45px;
  height: 45px;
  padding: 12px;
  color: black;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 0.97;
  }
  & path {
    fill: #0d263b;
  }
`;


Icon.Bed = styled(bed)`
path{
  fill:#FFF;
}
`;
Icon.Bath = styled(bath)`
path{
  fill:#FFF;
}
`;
Icon.Garage = styled(garage)`
path{
  fill:#FFF;
}
`;
Icon.Ruler = styled(ruler)`
path{
  fill:#FFF;
}
`;

Icon.Container = styled.div`
width: fit-content;
margin: 0 24px 0 0;
display:flex;
flex-direction:column;
align-items:center;
`;

Icon.Flex = styled.div`
width: fit-content;
display: flex;
`;

export { MainCarousel, CarouselWrapper, Img, Icon,Title };
