import {
  Container,
  StyledHero,
  StyledHeading,
  StyledHeroImage,
  StyledHeroImageWrapper,
} from './components/landingPage.styles';
import HeroImage from '/src/assets/images/hero.png';
import Categories from './components/Categories';
import { PostsListItem } from '@/posts';

const LandingPage = () => {
  return (
    <Container>
      <StyledHero>
        <StyledHeading>ბლოგი</StyledHeading>
        <StyledHeroImageWrapper>
          <StyledHeroImage src={HeroImage} alt='hero icon' />
        </StyledHeroImageWrapper>
      </StyledHero>
      <Categories />
      <PostsListItem />
    </Container>
  );
};

export default LandingPage;
