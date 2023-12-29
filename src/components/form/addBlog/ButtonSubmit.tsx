import { StyledFormButton } from 'src/pages/addBlog/components/blogPage.styles';
import { ButtonSubmitTypes } from '@/ui/buttons/types';

const ButtonSubmit = (props: ButtonSubmitTypes) => {
  return (
    <StyledFormButton available={props.available}>
      {props.title}
    </StyledFormButton>
  );
};

export default ButtonSubmit;
