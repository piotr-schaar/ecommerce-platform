import styled, { css } from 'styled-components';

const buttonbase = css`
  border: 1px solid ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.textColor};
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;
`;

const variants = {
  primary: css`
    background: ${({ theme }) => theme.primaryColor};
    padding: 15px 25px;
    &:hover {
      background: ${({ theme }) => theme.secondaryColor};
    }
  `,
  secondary: css`
    padding: 8px 10px;
    &:hover {
      background: ${({ theme }) => theme.secondaryColor};
    }
  `,
};

/* size variants */

const Button = styled.button`
  ${buttonbase};
  ${({ variant }) => variants[variant]}
`;

export default Button;
