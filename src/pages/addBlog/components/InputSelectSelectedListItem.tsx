import { HiXMark } from 'react-icons/hi2';
import { StyledInputSelectSelectedListItem } from './blogPage.styles';
import { SelectSelectedListItemTypes } from '../types';

const InputSelectSelectedListItem = (props: SelectSelectedListItemTypes) => {
  const { title, textColor, backgroundColor, option, removeSelectedItem } =
    props;

  return (
    <StyledInputSelectSelectedListItem
      textColor={textColor}
      backgroundColor={backgroundColor}
    >
      <span>{title}</span>
      <span onClick={(e) => removeSelectedItem(e, option)}>
        <HiXMark />
      </span>
    </StyledInputSelectSelectedListItem>
  );
};

export default InputSelectSelectedListItem;
