import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  padding: 1rem 3rem;
`;

export default Card;
