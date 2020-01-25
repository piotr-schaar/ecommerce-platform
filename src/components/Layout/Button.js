import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.primaryColor};
  width: 220px;
  height: 47px;
  border: none;
  font-weight: 600;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryColor};
  }
`;

export default Button;
