import styled from 'styled-components';

export const StyledModal = styled.dialog`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  background-color: var(--clr-white);
  padding: 40px 24px;
  border-radius: var(--rounded-sm);
  &::backdrop {
    background-color: #85858d;
    opacity: 0.3;
  }
`;
