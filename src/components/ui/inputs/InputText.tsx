import { IconError } from '@/icons';
import { InputTextTypes } from './types';
import {
  StyledInputError,
  StyledInputErrorMessage,
  StyledInputText,
  StyledInputWrapper,
} from '@/styles';

const InputText = ({
  name,
  placeholder,
  label,
  error,
  onChange,
  onBlur,
}: InputTextTypes) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{label}</label>
      <StyledInputText
        error={error}
        type='text'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && (
        <StyledInputError>
          <IconError />
          <StyledInputErrorMessage>{error.message}</StyledInputErrorMessage>
        </StyledInputError>
      )}
    </StyledInputWrapper>
  );
};
export default InputText;
