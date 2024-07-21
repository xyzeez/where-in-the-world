import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

// Contexts
import { ThemeProvider } from '../contexts/ThemeContext';
import { CountriesProvider } from '../contexts/CountriesContext';

// Components
import GlobalStyles from './GlobalStyles';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  min-height: 100vh;

  & > main {
    padding: 1.5rem 1rem;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  box-shadow: var(--header-shadow);
`;

const AppLayout = () => {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <GlobalStyles />
        <AppContainer>
          <Header>
            <Logo />
            <ThemeSwitch />
          </Header>
          <Outlet />
        </AppContainer>
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
