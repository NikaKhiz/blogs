import styled from 'styled-components';

export const StyledBlogList = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 50px;
`;

export const StyledBlogListItem = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;
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

export const StyledBlogInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledBlogGeneralInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledBlogAuthor = styled.p`
  color: var(--clr-black);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
`;

export const StyledBlogPublishedAt = styled.p`
  color: var(--clr-secondary-darkGray);
  font-size: var(--text-xs);
`;

export const StyledBlogTitle = styled.p`
  font-size: var(--text-medium);
  color: var(--clr-black);
  font-weight: var(--font-medium);
  line-height: 28px;
`;

export const StyledBlogCategories = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style-type: none;
  flex-wrap: wrap;
`;

export const StyledBlogInfo = styled.p`
  font-size: var(--text-base);
  color: var(--clr-primary-darkGray);
  line-height: 28px;
`;
