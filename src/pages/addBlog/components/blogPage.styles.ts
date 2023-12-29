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

export const StyledBlogFormWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 30%;
`;

export const StyledBlogFormContent = styled.form`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledBlogFormTitle = styled.p`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
`;
