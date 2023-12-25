import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - (76px));
  background-color: var(--clr-primary-lightishGray);
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const StyledBlogSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StyledBlogContent = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledBlogImageWrapper = styled.div`
  height: 330px;
  border-radius: var(--rounded-sm);
  overflow: hidden;
`;

export const StyledBlogImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledBlogGeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const StyledBlogPublishInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StyledBlogAuthor = styled.p`
  font-size: var(--text-base);
  color: var(--clr-black);
  font-weight: var(--font-medium);
`;
export const StyledBlogPublishedAt = styled.p`
  font-size: var(--text-xs);
  color: var(--clr-primary-darkGray);
`;
export const StyledBlogTitle = styled.h1`
  color: var(--clr-black);
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  line-height: 40px;
`;
export const StyledBlogDescription = styled.p`
  font-size: var(--text-base);
  color: var(--clr-primary-darkGray);
  line-height: 28px;
`;
