import styled from 'styled-components';

const LogoContainer = styled.a`
  font-family: var(--nunito);
  font-size: 14px;
  font-weight: var(--bold);
  color: var(--theme-text);
`;

const Logo = () => {
  return (
    <LogoContainer>
      <span>Where in the world?</span>
    </LogoContainer>
  );
};

export default Logo;
