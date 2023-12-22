import CategoryListItem from '@/categories/CategoryListItem';
import { CategoryTypes } from 'src/types/caterogies';
import { StyledCategoryList } from '@/styles/categories/categories.styles';

const CategoryList = (props: { categories: CategoryTypes[] }) => {
  return (
    <>
      <StyledCategoryList>
        {props.categories.map((item: CategoryTypes) => {
          return <CategoryListItem key={item.id} {...item} />;
        })}
      </StyledCategoryList>
    </>
  );
};

export default CategoryList;
