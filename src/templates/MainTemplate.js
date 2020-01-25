import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyles from 'utils/global';
import theme from 'utils/theme';

const MainWrapper = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  min-height: 100vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainWrapper>{children}</MainWrapper>
    </ThemeProvider>
  );
};

export default MainTemplate;
