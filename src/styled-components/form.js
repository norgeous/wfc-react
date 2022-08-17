import styled, { css } from 'styled-components';

export const Label = styled.label`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.sm};
  ${({ type }) => ['text','number'].includes(type) && css`
    flex-direction: column;
  ` || css`
    align-items: center;
    span {
      flex-grow: 1;
    }
  `}
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.bg[1]};
  color: ${({ theme }) => theme.text[0]};
  border: none;
  accent-color: ${({ theme }) => theme.accent};
  ${({ type }) => ['text','number'].includes(type) && css`
    padding: ${({ theme }) => theme.gap.md};
  `}
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.bg[1]};
  color: ${({ theme }) => theme.text[0]};
  border: none;
  padding: ${({ theme }) => theme.gap.md};
  min-width: 100px;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.bg[2]};
  }
`;
