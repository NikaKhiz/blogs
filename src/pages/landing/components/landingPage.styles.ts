import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - (76px));
  background-color: var(--clr-primary-lightishGray);
  padding: 60px 80px;
`;

export const StyledHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 65px;
`;

export const StyledHeading = styled.h1`
  font-size: var(--text-xxl);
  font-weight: var(--font-bold);
`;

export const StyledHeroImageWrapper = styled.div`
  width: 620px;
`;

export const StyledHeroImage = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;
