import {
  Container,
  StyledBlogContent,
  StyledBlogDescription,
  StyledBlogImage,
  StyledBlogImageWrapper,
  StyledBlogPublishInfo,
  StyledBlogPublishedAt,
  StyledBlogAuthor,
  StyledBlogGeneralInfo,
  StyledBlogTitle,
} from './components/blogPage.styles';
import { useEffect, useState } from 'react';
import { StyledBlogCategories } from '@/styles';
import CategoryListItem from '@/categories/CategoryListItem';
import { StyledBlogSection } from './components/blogPage.styles';
import { BlogTypes } from 'src/types/blogs';
import BlogsCarousel from './components/BlogsCarousel';
import ButtonSecondary from '@/ui/buttons/ButtonSecondary';
import { FaChevronLeft } from 'react-icons/fa';

type BlogTypeWithNewMember = BlogTypes & { email: string };

const BlogPage = () => {
  const [blog, setBlog] = useState<BlogTypeWithNewMember | null>(null);
  useEffect(() => {
    setBlog({
      author: 'author',
      description: 'blog description',
      categories: [
        {
          background_color: '#ffffff',
          id: 1,
          text_color: '#f122f3',
          title: 'category 1',
        },
      ],
      email: 'author email',
      id: 1,
      image: '#',
      publish_date: 'published at ',
      title: 'title of the blog',
    });
  }, []);
  const goBack = () => {
    console.log('go back');
  };
  if (!blog)
    return (
      <Container>
        <StyledBlogSection>
          <ButtonSecondary
            background='var(--clr-white)'
            top={0}
            left={0}
            onClick={goBack}
          >
            <FaChevronLeft />
          </ButtonSecondary>
          <p>Oops. No blog with current id. go back to the main page!</p>
        </StyledBlogSection>
      </Container>
    );

  return (
    <Container>
      <StyledBlogSection>
        <ButtonSecondary
          top='0'
          left='0'
          background='var(--clr-white)'
          onClick={goBack}
        >
          <FaChevronLeft />
        </ButtonSecondary>{' '}
        <StyledBlogContent>
          <StyledBlogImageWrapper>
            <StyledBlogImage src={blog.image} alt={`blog ${blog.title}`} />
          </StyledBlogImageWrapper>
          <StyledBlogGeneralInfo>
            <StyledBlogPublishInfo>
              <StyledBlogAuthor>{blog.author}</StyledBlogAuthor>
              <StyledBlogPublishedAt>{`${blog.publish_date.split(' ')[0]} . ${
                blog.email
              }`}</StyledBlogPublishedAt>
            </StyledBlogPublishInfo>
            <StyledBlogTitle>{blog.title}</StyledBlogTitle>
            <StyledBlogCategories>
              {blog.categories.map((category) => {
                return <CategoryListItem key={category.id} {...category} />;
              })}
            </StyledBlogCategories>
          </StyledBlogGeneralInfo>
          <StyledBlogDescription>{blog.description}</StyledBlogDescription>
        </StyledBlogContent>
      </StyledBlogSection>
      <BlogsCarousel />
    </Container>
  );
};
export default BlogPage;
