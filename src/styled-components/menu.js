import styled, { css } from 'styled-components';

export const Ol = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Li = styled.li`
  padding: ${({ theme }) => theme.gap.md};
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ selected }) => selected && css`
    background: ${({ theme }) => theme.bg[2]};
  `}
  ${({ selected }) => !selected && css`
    :hover {
      background: ${({ theme }) => theme.bg[4]};
      color: ${({ theme }) => theme.text[1]};
    }
  `}
`;
