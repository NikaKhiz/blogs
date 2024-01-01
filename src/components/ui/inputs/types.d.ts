import { ChangeHandler, FieldError } from 'react-hook-form';
import { CategoryTypes } from 'src/types/caterogies';

export type InputTypes = {
  label: string;
  name: string;
  placeholder?: string;
  error: FieldError | undefined;
  dirty: boolean | undefined;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  setValue: (e) => void;
};

export type InputSelectTypes = {
  label: string;
  name: string;
  placeholder?: string;
  error: FieldError | undefined;
  dirty: boolean | undefined;
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  setValue: (e) => void;
  options: CategoryTypes[];
};
