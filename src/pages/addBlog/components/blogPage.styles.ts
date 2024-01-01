import styled from 'styled-components';
import { SelectPropsType } from '../types';

export const Container = styled.main`
  width: 100%;
  min-height: calc(100vh - (76px));
  background-color: var(--clr-primary-lightishGray);
  padding: 40px 80px;
`;
export const StyledBlogSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledBlogFormWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 30%;
`;

export const StyledBlogFormContent = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledBlogFormTitle = styled.p`
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
`;

export const StyledBlogFormFieldsWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 24px;
  & > * {
    flex: 1;
  }
`;

export const StyledFormButton = styled.button<{ available: boolean }>`
  color: var(--clr-white);
  border: none;
  cursor: pointer;
  border-radius: var(--rounded-xs);
  padding: 10px 20px;
  width: 100%;
  background-color: ${(props) =>
    props.available ? 'var(--clr-primary-violet)' : 'var(--clr-overlay)'};
  cursor: ${(props) => (props.available ? 'pointer' : 'not-allowed')};
  &:hover {
    background-color: ${(props) =>
      props.available ? 'var(--clr-secondary-violet)' : ''};
  }
`;

export const StyledInputSelectContainer = styled.div`
  position: relative;
`;
export const StyledInputSelectWrapper = styled.div<SelectPropsType>`
  color: var(--clr-secondary-darkGray);
  font-size: var(--text-sm);
  padding: ${(props) => (props.selected ? '6px 16px 6px 6px' : '12px 16px')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
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
  &::placeholder {
    color: var(--clr-secondary-darkGray);
  }
  &:focus {
    border: 1px solid var(--clr-primary-violet);
  }
`;

export const StyledInputSelectSelectedList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 290px;
  overflow-x: scroll;
  list-style-type: none;
  & {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledInputSelectSelectedListItem = styled.li<{
  textColor: string;
  backgroundColor: string;
}>`
  font-size: var(--text-xs);
  border-radius: var(--rounded-large);
  padding: 8px 12px;
  min-width: max-content;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StyledInputSelectMenu = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 10;
  max-height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
  gap: 8px;
  padding: 16px 25px 16px 16px;
  box-shadow: 2px 4px 8px 0px #00000014;
  border: 1px solid var(--clr-secondary-neutralGray);
  border-radius: var(--rounded-sm);
  background-color: var(--clr-white);
  list-style-type: none;

  & {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const StyledInputSelectMenuItem = styled.li<{
  textColor: string;
  backgroundColor: string;
}>`
  font-size: var(--text-xs);
  padding: 8px 12px;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: var(--rounded-medium);
  cursor: pointer;
`;
