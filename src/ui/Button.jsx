import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 14px;
  color: var(--theme-text);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: var(--element-round);
  box-shadow: var(--element-shadow);
  background-color: var(--theme-element);

  &:disabled {
    opacity: 0.5;
  }

  &[aria-current='page'] {
    border-color: var(--theme-element);
    background-color: var(--button-active);
  }

  & > svg {
    stroke: var(--theme-text);
    width: 20px;
    aspect-ratio: 1/1;
  }
`;

export default Button;
