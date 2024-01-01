import { SelectSelectedListTypes } from '../types';
import { StyledInputSelectSelectedList } from './blogPage.styles';

const InputSelectSelectedList = (props: SelectSelectedListTypes) => {
  return (
    <StyledInputSelectSelectedList>
      {props.children}
    </StyledInputSelectSelectedList>
  );
};

export default InputSelectSelectedList;
