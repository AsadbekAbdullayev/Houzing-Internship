import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  max-width: var(--width);
  width: 100%;
  margin-top: 70px;
  margin-bottom: 15px;
  font-size: 18px;
`;

const Wrapper = styled.div`
  /* display: flex;
  max-width: var(--width);
  width: 100%;
  
  flex-wrap: wrap;
  gap: 20px;
  */

  display: grid;
  grid-gap: 20px 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
  width: 100%;
  padding: 0 130px;
  max-width: var(--width);
  margin:0 0 40px 0;
`;

export { Container, Wrapper, Title };
