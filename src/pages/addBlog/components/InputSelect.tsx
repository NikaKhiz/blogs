import {
  StyledInputSelectContainer,
  StyledInputSelectWrapper,
} from './blogPage.styles';
import { StyledInputWrapper } from '@/styles';
import { MouseEvent, forwardRef, useState } from 'react';
import { InputSelectTypes } from '@/ui/inputs/types';
import { FaChevronDown } from 'react-icons/fa';
import { CategoryTypes } from 'src/types/caterogies';
import InputSelectMenu from './InputSelectMenu';
import InputSelectMenuItem from './InputSelectMenuItem';
import InputSelectSelectedList from './InputSelectSelectedList';
import InputSelectSelectedListItem from './InputSelectSelectedListItem';

const InputSelect = forwardRef<HTMLDivElement, InputSelectTypes>(
  (
    {
      name,
      label,
      placeholder,
      error,
      dirty,
      onChange,
      onBlur,
      setValue,
      options,
    },
    ref,
  ) => {
    const [selectedOptions, setSelectedOptions] = useState<CategoryTypes[]>([]);
    const [isListOpen, setIsListOpen] = useState<boolean>(false);
    const toggleList = () => {
      return setIsListOpen((prevState) => !prevState);
    };

    const selectItem = (option: CategoryTypes) => {
      if (selectedOptions.some((element) => element.id === option.id)) return;
      setSelectedOptions((prevState) => [...prevState, option]);
    };

    const removeSelectedOption = (e: MouseEvent, option: CategoryTypes) => {
      e.stopPropagation();
      const filteredOptions = selectedOptions.filter(
        (item: CategoryTypes) => item.id !== option.id,
      );
      setSelectedOptions(filteredOptions);
    };
    return (
      <StyledInputWrapper>
        <label htmlFor={name}>{label}</label>
        <StyledInputSelectContainer>
          <StyledInputSelectWrapper
            onClick={toggleList}
            tabIndex={0}
            dirty={dirty}
            error={error}
            selected={selectedOptions.length > 0}
          >
            {selectedOptions.length > 0 ? (
              <InputSelectSelectedList>
                {selectedOptions.map((item) => {
                  return (
                    <InputSelectSelectedListItem
                      title={item.title}
                      textColor={item.text_color}
                      backgroundColor={item.background_color}
                      key={item.id}
                      option={item}
                      removeSelectedItem={(e) => removeSelectedOption(e, item)}
                    />
                  );
                })}
              </InputSelectSelectedList>
            ) : (
              <p>{placeholder}</p>
            )}
            <FaChevronDown />
          </StyledInputSelectWrapper>
          {isListOpen && (
            <InputSelectMenu>
              {options?.map((item) => {
                return (
                  <InputSelectMenuItem
                    title={item.title}
                    textColor={item.text_color}
                    backgroundColor={item.background_color}
                    key={item.id}
                    onClick={() => selectItem(item)}
                  />
                );
              })}
            </InputSelectMenu>
          )}
        </StyledInputSelectContainer>
      </StyledInputWrapper>
    );
  },
);
export default InputSelect;
