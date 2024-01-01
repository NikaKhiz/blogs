import {
  StyledInputDate,
  StyledInputError,
  StyledInputErrorMessage,
  StyledInputWrapper,
} from '@/styles';
import { forwardRef } from 'react';
import { InputTypes } from './types';
import { IconError } from '@/icons';

const InputDate = forwardRef<HTMLInputElement, InputTypes>(
  ({ name, label, error, dirty, onChange, onBlur, setValue }, ref) => {
    return (
      <StyledInputWrapper>
        <label htmlFor={name}>{label}</label>
        <StyledInputDate
          error={error}
          id={name}
          name={name}
          type='date'
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

export default InputDate;
