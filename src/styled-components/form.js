import styled, { css } from 'styled-components';

export const Label = styled.label`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gap.sm};
  align-items: center;
  font-size: 12px;
  ${({ type }) => ['checkbox', 'radio'].includes(type) && css`
    cursor: pointer;
  `}
  ${({ type }) => ['checkbox'].includes(type) && css`
    padding-top: ${({ theme }) => theme.gap.md};
    padding-bottom: ${({ theme }) => theme.gap.md};
  `}
`;

export const Prefix = styled.span`
  ${({ type }) => ['radio', 'checkbox'].includes(type) && css`
    flex-grow: 1;
  `}
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.bg[1]};
  color: ${({ theme }) => theme.text[0]};
  border: none;
  accent-color: ${({ theme }) => theme.accent};
  ${({ type }) => ['text', 'number'].includes(type) && css`
    flex-grow: 1;
    padding: ${({ theme }) => theme.gap.md};
  `}
  ${({ type }) => ['text', 'number', 'range'].includes(type) && css`
    min-width: 50px;
  `}
  ${({ type }) => ['checkbox', 'radio'].includes(type) && css`
    cursor: pointer;
    transform: scale(1.4);
    margin: 0 6px;
  `}
`;

export const Suffix = styled.span`
  width: 30px;
  line-height: 0px;
  flex-shrink: 0;
  white-space: nowrap;
`;

export const Radios = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.md};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.bg[1]};
  color: ${({ theme }) => theme.text[0]};
  border: none;
  padding: ${({ theme }) => theme.gap.md};
  min-width: 120px;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.bg[2]};
  }
  display: flex;
  gap: ${({ theme }) => theme.gap.md};
  justify-content: center;
`;
