import styled from 'styled-components';

export const Container = styled.div`
width: 280px;
height: 350px;
border-radius: 3px;
box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
border-radius: 3px;
position:relative;
`;

Container.Title = styled.div`
position: absolute;
color:#fff;
font-size:40px;
top:140px;
left:40px;
`;

Container.Image = styled.img`
width: 280px;
height: 350px;

`;