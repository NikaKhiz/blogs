import { FieldError } from 'react-hook-form';

export type InputPropsType = {
  error: FieldError | undefined;
  dirty: boolean | undefined;
};
