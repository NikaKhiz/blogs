import { StyledButtonSecondary } from '@/styles';
import { ButtonSecondaryTypes } from './types';

const ButtonSecondary = (props: ButtonSecondaryTypes) => {
  return (
    <StyledButtonSecondary
      onClick={props.onClick}
      background={'var(--clr-white)'}
    >
      {props.children}
    </StyledButtonSecondary>
  );
};

export default ButtonSecondary;
