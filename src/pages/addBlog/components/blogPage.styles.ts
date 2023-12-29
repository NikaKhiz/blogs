import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - (76px));
  background-color: var(--clr-primary-lightishGray);
  padding: 40px 80px;
`;
export const StyledBlogSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledBlogFormWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 30%;
`;

export const StyledBlogFormContent = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledBlogFormTitle = styled.p`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
`;

export const StyledBlogFormFieldsWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 24px;
  & > * {
    flex: 1;
  }
`;

export const StyledFormButton = styled.button<{ available: boolean }>`
  color: var(--clr-white);
  border: none;
  cursor: pointer;
  border-radius: var(--rounded-xs);
  padding: 10px 20px;
  width: 100%;
  background-color: ${(props) =>
    props.available ? 'var(--clr-primary-violet)' : 'var(--clr-overlay)'};
  cursor: ${(props) => (props.available ? 'pointer' : 'not-allowed')};
  &:hover {
    background-color: ${(props) =>
      props.available ? 'var(--clr-secondary-violet)' : ''};
  }
`;
