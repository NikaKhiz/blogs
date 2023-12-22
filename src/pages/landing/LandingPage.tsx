import { CategoryTypes } from 'src/types/caterogies';
import {
  Container,
  StyledHero,
  StyledHeading,
  StyledHeroImage,
  StyledHeroImageWrapper,
  StyledPostsContainer,
} from './components/landingPage.styles';
import HeroImage from '/src/assets/images/hero.png';
import CategoryList from '@/categories/CategoryList';

import { PostsListItem } from '@/posts';

const LandingPage = () => {
  const categories: CategoryTypes[] = [];

  return (
    <Container>
      <StyledHero>
        <StyledHeading>ბლოგი</StyledHeading>
        <StyledHeroImageWrapper>
          <StyledHeroImage src={HeroImage} alt='hero icon' />
        </StyledHeroImageWrapper>
      </StyledHero>
      <StyledPostsContainer>
        {categories.length > 0 && <CategoryList categories={categories} />}
        <PostsListItem />
      </StyledPostsContainer>
    </Container>
  );
};

export default LandingPage;
