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
import { useNavigate } from 'react-router-dom';

const AddBlogPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
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
