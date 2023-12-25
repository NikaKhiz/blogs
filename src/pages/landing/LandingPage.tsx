import { CategoryTypes } from 'src/types/caterogies';
import { BlogTypes } from 'src/types/blogs';
import {
  Container,
  StyledHero,
  StyledHeading,
  StyledHeroImage,
  StyledHeroImageWrapper,
  StyledPostsContainer,
} from './components/landingPage.styles';
import HeroImage from '/src/assets/images/hero.png';
import { CategoryList } from '@/categories';
import { BlogList } from '@/posts';

const LandingPage = () => {
  const categories: CategoryTypes[] = [];
  const blogs: BlogTypes[] = [];

  return (
    <Container>
      <StyledHero>
        <StyledHeading>ბლოგი</StyledHeading>
        <StyledHeroImageWrapper>
          <StyledHeroImage src={HeroImage} alt='hero icon' />
        </StyledHeroImageWrapper>
      </StyledHero>
      {(categories.length > 0 || blogs.length > 0) && (
        <StyledPostsContainer>
          {categories.length > 0 && <CategoryList categories={categories} />}
          {blogs.length > 0 && <BlogList blogs={blogs} />}
        </StyledPostsContainer>
      )}
    </Container>
  );
};

export default LandingPage;
