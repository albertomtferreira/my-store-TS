import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: block;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 20px;
    margin-top: 20px;
    row-gap: 20px;
    column-gap: 20px;
    justify-items: center;
    align-items: center;
    justify-content: center;
    align-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
