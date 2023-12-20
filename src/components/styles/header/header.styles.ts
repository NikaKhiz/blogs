import styled from 'styled-components';
import { PropsType } from './types';

export const StyledHeader = styled.header<PropsType>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.isStandart ? 'space-between' : 'center'};
  background-color: var(--clr-primary-white);
  padding: 20px 80px;
  border-bottom: 1px solid #e4e3eb;
`;
