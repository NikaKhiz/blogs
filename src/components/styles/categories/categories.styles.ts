import styled from 'styled-components';

export const StyledCategoryList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 700px;
  margin: 0 auto;
  overflow-x: auto;
  list-style-type: none;
`;

export const StyledCategoryListItem = styled.li<{
  textColor: string;
  backgroundColor: string;
  active: boolean;
}>`
  text-align: center;
  font-size: var(--text-xs);
  border-radius: var(--rounded-large);
  padding: 8px 16px;
  min-width: max-content;
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  border: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.active ? `var(--clr-black)` : 'transparent'};
  cursor: pointer;
`;
