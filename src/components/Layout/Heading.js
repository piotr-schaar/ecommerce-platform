import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const baseStyle = css`
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: 700;
  margin: 2rem 0;
`;

const Heading1 = styled.h1`
  font-size: 3rem;
  ${baseStyle}
`;
const Heading2 = styled.h2`
  font-size: 2.2rem;
  ${baseStyle}
`;

const Heading = ({ children, size }) => {
  switch (size) {
    case 'h1':
      return <Heading1>{children}</Heading1>;
    case 'h2':
      return <Heading2>{children}</Heading2>;
    default:
      return <Heading2>{children}</Heading2>;
  }
};

Heading.defaultProps = {
  size: 'h1',
};

Heading.propTypes = {
  size: PropTypes.string,
};

export default Heading;
