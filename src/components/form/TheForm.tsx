import { StyledForm } from '@/styles';
import { FormTypes } from './types';

const TheForm = (props: FormTypes) => {
  const { children, onSubmit } = props;
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
export default TheForm;
