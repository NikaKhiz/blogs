import { SelectMenuItemTypes } from '../types';
import { StyledInputSelectMenuItem } from './blogPage.styles';

const InputSelectMenuItem = (props: SelectMenuItemTypes) => {
  const { title, textColor, backgroundColor, onClick } = props;
  return (
    <StyledInputSelectMenuItem
      textColor={textColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {title}
    </StyledInputSelectMenuItem>
  );
};

export default InputSelectMenuItem;
