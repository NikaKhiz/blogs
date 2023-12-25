import { BlogTypes } from 'src/types/blogs';
import CategoryListItem from '@/categories/CategoryListItem';
import {
  StyledBlogListItem,
  StyledBlogImageWrapper,
  StyledBlogImage,
  StyledBlogInfoWrapper,
  StyledBlogGeneralInfo,
  StyledBlogAuthor,
  StyledBlogPublishedAt,
  StyledBlogTitle,
  StyledBlogCategories,
  StyledBlogInfo,
} from '@/styles';
import ButtonRedirect from '@/ui/buttons/ButtonRedirect';

const PostsListItem = (props: { blog: BlogTypes }) => {
  const {
    blog: { title, author, categories, description, image, publish_date },
  } = props;
  return (
    <StyledBlogListItem>
      <StyledBlogImageWrapper>
        <StyledBlogImage src={image} alt={`blog about ${title}`} />
      </StyledBlogImageWrapper>
      <StyledBlogInfoWrapper>
        <StyledBlogGeneralInfo>
          <StyledBlogAuthor>{author}</StyledBlogAuthor>
          <StyledBlogPublishedAt>
            {publish_date.split(' ')[0]}
          </StyledBlogPublishedAt>
        </StyledBlogGeneralInfo>
        <StyledBlogTitle>{title}</StyledBlogTitle>
        <StyledBlogCategories>
          {categories.map((category) => {
            return <CategoryListItem key={category.id} {...category} />;
          })}
        </StyledBlogCategories>
        <StyledBlogInfo>{`${description.substring(0, 100)}...`}</StyledBlogInfo>
        <ButtonRedirect to='#' title='სრულად ნახვა' />
      </StyledBlogInfoWrapper>
    </StyledBlogListItem>
  );
};

export default PostsListItem;
