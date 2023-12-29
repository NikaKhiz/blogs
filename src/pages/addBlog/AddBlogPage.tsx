import ButtonSecondary from '@/ui/buttons/ButtonSecondary';
import {
  Container,
  StyledBlogFormContent,
  StyledBlogFormTitle,
  StyledBlogFormWrapper,
  StyledBlogSection,
} from './components/blogPage.styles';
import { FaChevronLeft } from 'react-icons/fa';
import { FormAddBlog } from '@/form/addBlog';

const goBack = () => {
  console.log('go back');
};
const AddBlogPage = () => {
  return (
    <Container>
      <StyledBlogSection>
        <ButtonSecondary
          top='0'
          left='0'
          background='var(--clr-overlay)'
          onClick={() => goBack()}
        >
          <FaChevronLeft />
        </ButtonSecondary>
        <StyledBlogFormWrapper>
          <StyledBlogFormContent>
            <StyledBlogFormTitle>ბლოგის დამატება</StyledBlogFormTitle>
            <FormAddBlog />
          </StyledBlogFormContent>
        </StyledBlogFormWrapper>
      </StyledBlogSection>
    </Container>
  );
};

export default AddBlogPage;
