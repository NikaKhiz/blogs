import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButtonPrimary = styled.button`
  background: var(--clr-primary-violet);
  color: var(--clr-white);
  border: none;
  cursor: pointer;
  border-radius: var(--rounded-xs);
  padding: 10px 20px;
  width: 100%;
`;

export const StyledButtonRedirect = styled(Link)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: var(--text-sm);
  color: var(--clr-primary-violet);
  font-weight: var(--font-medium);
  text-decoration: none;
`;
