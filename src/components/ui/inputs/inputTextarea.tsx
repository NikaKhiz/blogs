import { IconError } from '@/icons';
import { InputTextTypes } from './types';
import {
  StyledInputError,
  StyledInputErrorMessage,
  StyledInputWrapper,
  StyledTextArea,
} from '@/styles';
import { forwardRef } from 'react';

const InputTextarea = forwardRef<HTMLTextAreaElement, InputTextTypes>(
  (
    { name, placeholder, label, error, dirty, onChange, onBlur, setValue },
    ref,
  ) => {
    return (
      <StyledInputWrapper>
        <label htmlFor={name}>{label}</label>
        <StyledTextArea
          error={error}
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
export default InputTextarea;
