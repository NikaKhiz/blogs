import { StyledButtonPrimary } from '@/styles';
import { ButtonPrimaryTypes } from './types';

const ButtonPrimary = (props: ButtonPrimaryTypes) => {
  return (
    <StyledButtonPrimary onClick={props.onClick}>
      {props.title}
    </StyledButtonPrimary>
  );
};

export default ButtonPrimary;
