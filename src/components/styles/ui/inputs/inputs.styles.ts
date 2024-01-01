import styled from 'styled-components';
import { InputPropsType } from './types';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const StyledLabel = styled.label`
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
`;
export const StyledInputText = styled.input<InputPropsType>`
  color: var(--clr-black);
  font-size: var(--text-sm);
  background-color: ${(props) =>
    props.error ? '--clr-dullRed' : 'transparent'};
  border: 1px solid
    ${(props) =>
      props.error
        ? 'var(--clr-red)'
        : props.dirty && !props.error
          ? 'var(--clr-green)'
          : 'var(--clr-primary-neutralGray)'};
  border-radius: var(--rounded-xs);
  padding: 12px 16px;
  outline: none;
  &::placeholder {
    color: var(--clr-secondary-darkGray);
  }
  &:focus {
    border: 1px solid var(--clr-primary-violet);
  }
`;
export const StyledInputError = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledInputErrorMessage = styled.span`
  font-size: var(--text-xs);
  color: var(--clr-red);
`;

export const StyledTextArea = styled.textarea<InputPropsType>`
  color: var(--clr-black);
  font-size: var(--text-sm);
  background-color: ${(props) =>
    props.error ? '--clr-dullRed' : 'transparent'};
  border: 1px solid
    ${(props) =>
      props.error
        ? 'var(--clr-red)'
        : props.dirty && !props.error
          ? 'var(--clr-green)'
          : 'var(--clr-primary-neutralGray)'};
  border-radius: var(--rounded-xs);
  padding: 12px 16px;
  outline: none;
  resize: none;
  &::placeholder {
    color: var(--clr-secondary-darkGray);
  }
  &:focus {
    border: 1px solid var(--clr-primary-violet);
  }
`;

export const StyledInputDate = styled.input<InputPropsType>`
  color: var(--clr-black);
  font-size: var(--text-sm);
  background-color: ${(props) =>
    props.error ? '--clr-dullRed' : 'transparent'};
  border: 1px solid
    ${(props) =>
      props.error
        ? 'var(--clr-red)'
        : props.dirty && !props.error
          ? 'var(--clr-green)'
          : 'var(--clr-primary-neutralGray)'};
  border-radius: var(--rounded-xs);
  padding: 12px 16px;
  outline: none;
  &::placeholder {
    color: var(--clr-secondary-darkGray);
  }
  &:focus {
    border: 1px solid var(--clr-primary-violet);
  }
`;
