import styled from 'styled-components';
import { ReactComponent as Pen } from '../../assets/icons/pen.svg';
import { ReactComponent as Axlat } from '../../assets/icons/axlat.svg';

const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
margin:34px 0 90px 0;
`;


const Wrapper = styled.div`
width: 100%;
max-width: 1180px;

`;

Wrapper.Card = styled.div`
width: 100%;
background: #FFFFFF;
border: 1px solid #E6E9EC;
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
border-radius: 3px;
padding:24px 30px;
`;

Wrapper.Between = styled.div`
width:100%;
display: flex;
justify-content:space-between;

`;

Container.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height:36px;
color: #0D263B;
`;


Wrapper.Title = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
`;

Wrapper.Desc = styled.div`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`;

Wrapper.Del = styled.del`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
/* text-decoration-line: line-through; */
color: #696969;
`;

const Table = styled.table`
width:100%;

`;

Table.TH = styled.th`

height: 30px;
flex: 1;
display:flex;
align-items:center;
`;

Table.THimage = styled.th`
height: 30px;
flex:3;
display:flex;
align-items:center;

`;

Table.TR = styled.tr`
display:flex;
margin:0 0 25px 0;
`;

Table.TBODY = styled.tbody``;
Table.THEAD = styled.thead``;
Table.TDimage = styled.td`
height: 113px;
flex:3;
display:flex;
align-items:center;
`;

Table.TD = styled.td`
height: 113px;
display:flex;
align-items:center;
flex: 1;
/* justify-content:flex-end; */
`;

Wrapper.image = styled.img`
width: 113px;
height: 113px;
`;

Wrapper.imageContainer = styled.div`
width: 113px;
height: 113px;
border-radius: 3px;
position: relative;
border: 1px solid violet;
margin:0 20px 0 0;
`;


Wrapper.feature = styled.div`
height: 23px;
width: fit-content;
display: flex;
align-items: center;
justify-content:space-between;
padding: 5px 12px;

position: absolute;
left:5px;
top:5px;

font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
background: #0061DF;
border-radius: 3px;
`;

Wrapper.forSale = styled.div`
display: flex;
align-items:center;
justify-content:center;
padding: 5px 12px;
height: 23px;
width:fit-content;
background: #0D263B;
border-radius: 3px;
font-style: normal;
font-weight: 600;
font-size: 10px;
line-height: 13px;
color: #FFFFFF;
margin:0 0 0 36px;
`;


Wrapper.Flex = styled.div`
width: fit-content;
display: flex;
align-items:center;
`;

Wrapper.Column = styled.div`
width: fit-content;
height: 100%;
`;

const Icon = styled.div``;

Icon.Pen = styled(Pen)`
width: 20px;
height: 20px;
:hover{
path{
fill:green;
}

}
`;

Icon.Axlat = styled(Axlat)`
width: 20px;
height: 20px;
:active{
    path{
fill:red;
}
}
`;

Icon.Con = styled.div`
width: 35px;
height: 35px;
background: #F6F8F9;
border-radius: 50%;
display: flex;
align-items:center;
justify-content:center;
margin:0 0 0 15px;
`;

export {Container,Wrapper,Table,Icon};