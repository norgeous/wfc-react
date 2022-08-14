import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text[0]};
`;

export const Header = styled.header`
  display: flex;
  background: ${({ theme }) => theme.bg[1]};
  gap: ${({ theme }) => theme.gap.md};
  align-items: center;
`;

export const LogoLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.text[0]};
  padding: ${({ theme }) => theme.gap.md};
  text-decoration: none;
  font-size: 20px;
  :hover {
    background: ${({ theme }) => theme.bg[2]};
    color: ${({ theme }) => theme.text[1]};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`;

export const Sidebar = styled.aside`
  display: flex;
  background: ${({ theme }) => theme.bg[1]};
  padding: ${({ theme }) => theme.gap.md};
  min-width: 200px;
`;

export const Content = styled.section`
  background: ${({ theme }) => theme.bg[0]};
  flex-grow: 1;
`;

export const Footer = styled.footer`
  display: flex;
  background: ${({ theme }) => theme.bg[1]};
  padding: ${({ theme }) => theme.gap.md};
`;
