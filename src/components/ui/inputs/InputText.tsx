import { IconError } from '@/icons';
import { InputTextTypes } from './types';
import {
  StyledInputError,
  StyledInputErrorMessage,
  StyledInputText,
  StyledInputWrapper,
} from '@/styles';

const InputText = (props: InputTextTypes) => {
  const { name, placeholder, label, error } = props;
  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{label}</label>
      <StyledInputText
        error={error}
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
      />
      {error && (
        <StyledInputError>
          <IconError />
          <StyledInputErrorMessage>error message</StyledInputErrorMessage>
        </StyledInputError>
      )}
    </StyledInputWrapper>
  );
};

export default InputText;
