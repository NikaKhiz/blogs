import styled from 'styled-components';

export const StyledCarouselWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledCarouselHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledCarouselHeading = styled.p`
  color: var(--clr-black);
  font-weight: var(--font-bold);
  font-size: var(--text-2xl);
`;
export const StyledCarouselActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledCarouselAction = styled.button<{ available: boolean }>`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: var(--rounded-medium);
  background-color: ${(props) =>
    props.available ? 'var(--clr-primary-violet)' : 'var(--clr-overlay)'};
  cursor: ${(props) => (props.available ? 'pointer' : 'not-allowed')};

  &:hover {
    background-color: ${(props) =>
      props.available ? 'var(--clr-secondary-violet)' : ''};
  }
`;
