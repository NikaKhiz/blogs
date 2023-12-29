import { StyledButtonSecondary } from '@/styles';
import { ButtonSecondaryTypes } from './types';

const ButtonSecondary = (props: ButtonSecondaryTypes) => {
  return (
    <StyledButtonSecondary
      onClick={props.onClick}
      background={props.background}
      bghover={props.bghover}
      top={props.top}
      left={props.left}
      right={props.right}
    >
      {props.children}
    </StyledButtonSecondary>
  );
};

export default ButtonSecondary;
