import styled from 'styled-components';

const Container = styled.div`
  padding: 0 10%;
  margin: 0;
  margin: 0 auto;
  @media (min-width: 1240px) {
    margin: 0 auto;
    width: 1240px;
    padding: 0 10%;
  }
  @media (max-width: 557px) {
    margin: 0;
    padding: 0;
  }
`;

export default Container;
