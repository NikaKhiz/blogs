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
import HeroImage from 'src/assets/images/hero.png';
import { CategoryList } from '@/categories';
import { BlogList } from '@/posts';
import { useEffect } from 'react';
import useCategoryStore from 'src/store/category';
import { getCategories } from 'src/services';

const LandingPage = () => {
  const categoryStore = useCategoryStore();
  const categories: CategoryTypes[] = categoryStore.categories;
  const blogs: BlogTypes[] = [];

  useEffect(() => {
    getCategories()
      .then((response) => {
        const categories = response.data.data;
        categoryStore.setCategories(categories);
      })
      .catch((error) => console.log(error));
  }, [categoryStore]);

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
