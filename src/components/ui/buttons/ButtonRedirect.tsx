import { StyledButtonRedirect } from '@/styles';
import { ButtonRedirectTypes } from './types';
import { TfiArrowTopRight } from 'react-icons/tfi';

const ButtonRedirect = (props: ButtonRedirectTypes) => {
  return (
    <StyledButtonRedirect to={props.to}>
      {' '}
      <span>{props.title}</span>
      <TfiArrowTopRight />
    </StyledButtonRedirect>
  );
};

export default ButtonRedirect;
