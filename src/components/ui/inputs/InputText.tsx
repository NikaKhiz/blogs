import { IconError } from '@/icons';
import { InputTypes } from './types';
import {
  StyledInputError,
  StyledInputErrorMessage,
  StyledInputText,
  StyledInputWrapper,
} from '@/styles';
import { forwardRef } from 'react';

const InputText = forwardRef<HTMLInputElement, InputTypes>(
  (
    { name, placeholder, label, error, dirty, onChange, onBlur, setValue },
    ref,
  ) => {
    return (
      <StyledInputWrapper>
        <label htmlFor={name}>{label}</label>
        <StyledInputText
          error={error}
          type='text'
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            onChange(e);
            setValue(e);
          }}
          onBlur={onBlur}
          ref={ref}
          dirty={dirty}
        />
        {error && (
          <StyledInputError>
            <IconError />
            <StyledInputErrorMessage>{error.message}</StyledInputErrorMessage>
          </StyledInputError>
        )}
      </StyledInputWrapper>
    );
  },
);
export default InputText;
