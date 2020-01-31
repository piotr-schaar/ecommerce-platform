import styled from 'styled-components';

const Select = styled.select`
  background: white;
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  padding: 5px;
  width: 120px;
`;

export default Select;
