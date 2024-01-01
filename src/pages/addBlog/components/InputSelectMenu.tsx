import { SelectMenuTypes } from '../types';
import { StyledInputSelectMenu } from './blogPage.styles';

const InputSelectMenu = (props: SelectMenuTypes) => {
  return <StyledInputSelectMenu>{props.children}</StyledInputSelectMenu>;
};

export default InputSelectMenu;
