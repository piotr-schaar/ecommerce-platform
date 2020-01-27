import styled, { css } from 'styled-components';

const buttonbase = css`
  border: 1px solid #333333;
  color: black;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;
`;

const variants = {
  primary: css`
    background: ${({ theme }) => theme.primaryColor};
    padding: 15px 25px;
    color: black;
    &:hover {
      background: ${({ theme }) => theme.secondaryColor};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.secondaryColor};
    color: black;
    padding: 8px 10px;

    &:hover {
      background: ${({ theme }) => theme.primaryColor};
    }
  `,
};

/* size variants */

const Button = styled.button`
  ${buttonbase};
  ${({ variant }) => variants[variant]}
`;

export default Button;
