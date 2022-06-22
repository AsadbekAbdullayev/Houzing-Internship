import React, { useRef,memo } from 'react';
import { CarouselWrapper, Icon, Img, MainCarousel,Title} from './style';
import img1 from '../../../assets/imgs/uy1.png';
import img2 from '../../../assets/imgs/uy2.png';
import {Button} from '../../Generic/';
export const Home = () => {
  const slider = useRef();

// const KetmaKet = (value)=>{
//   let array =value;
//   let arr1 = [];
//   for (let q = 0; q < array.length; q++) {
//       if(q==0){
//         if(array[q]+1 == array[q+1]){
  
//           arr1.push(array[0]);
//         }
//       }

//       if(q>0){
//         if(array[q-1]+1 == array[q] || array[q+1] == array[q] +1){
//           arr1.push(array[q]);
//         }
//       }
//   }
  
// let arr = arr1;
// let res = [];
// let block = [];
// let inital =0;
// for (let i = 0; i < arr.length; i++) {

//   if( !(arr[i]+1 == arr[i+1]) ) {
//       for (let j = inital; j <= i; j++) {
//         block.push(arr[j]);
//       }
//     }
    
//   if(! (block.length == 0) ){
//     res.push(block);
//     block=[];
//     inital=i+1;
//   }
  
//   if(i == arr.length-1){
//     for (let k = inital; k <= i; k++) {
//     block.push(arr[k]);
//     }
//   }

//   if(! (block.length == 0) ){
//     res.push(block);
//   }
  
// }
// console.log(res);
// };
// KetmaKet([1,2,3,1,1,2,3,4,5,5,7,7,8,9,10]);


  return (
    <CarouselWrapper>
      <Icon.Left onClick={() => slider.current?.prev()} />
      <Icon.Right onClick={() => slider.current?.next()} />
      <MainCarousel ref={slider} dots autoplay>
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
        <Img src={img1} alt='img' />
        <Img src={img2} alt='img' />
      </MainCarousel>
        <Title.Container>
          <Title style={{margin:'0 0 5px 0'}}>
          Skyper Pool Partment
          </Title>

          <Title.Desc style={{margin:'0 0 20px 0'}}>
          112 Glenwood Ave Hyde Park, Boston, MA
          </Title.Desc>
          <Icon.Flex>
            <Icon.Container>
              <Icon.Bed/>
              <Title.Desc>4 beds</Title.Desc>
            </Icon.Container>

            <Icon.Container>
              <Icon.Bath/>
              <Title.Desc>5 Baths</Title.Desc>
            </Icon.Container>

            <Icon.Container>
              <Icon.Garage/>
              <Title.Desc>1 Garage</Title.Desc>
            </Icon.Container>

            <Icon.Container>
              <Icon.Ruler/>
              <Title.Desc>1200 Sq Ft</Title.Desc>
            </Icon.Container>
          </Icon.Flex>
          <Title.price>
          $5,250/mo
          </Title.price>
          <Button width={'200px'}>Read more</Button>
        </Title.Container>
    </CarouselWrapper>
  );
};

export default Home;
