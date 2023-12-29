import { ChangeHandler, FieldError } from 'react-hook-form';

export type InputTextTypes = {
  label: string;
  name: string;
  placeholder: string;
  error: FieldError | undefined;
  dirty: boolean | undefined;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  setValue: (e) => void;
};
