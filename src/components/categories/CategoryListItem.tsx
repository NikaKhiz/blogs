import { CategoryTypes } from 'src/types/caterogies';
import { StyledCategoryListItem } from '@/styles/categories';

const CategoryListItem = (props: CategoryTypes) => {
  const { title, text_color, background_color } = props;
  return (
    <StyledCategoryListItem
      backgroundColor={background_color}
      textColor={text_color}
      active={false}
    >
      {title}
    </StyledCategoryListItem>
  );
};
export default CategoryListItem;
