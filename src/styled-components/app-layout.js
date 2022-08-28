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
  background: ${({ theme }) => theme.bg[3]};
  gap: ${({ theme }) => theme.gap.md};
  align-items: center;
  a { flex-shrink: 0; }
  ol { flex-shrink: 1; }
`;

export const LogoLink = styled.a`
  display: block;
  color: ${({ theme }) => theme.text[0]};
  padding: ${({ theme }) => theme.gap.md};
  text-decoration: none;
  font-size: 20px;
  :hover {
    background: ${({ theme }) => theme.bg[4]};
    color: ${({ theme }) => theme.text[1]};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
`;

export const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap.md};
  background: ${({ theme }) => theme.bg[3]};
  padding: ${({ theme }) => theme.gap.md};
  width: 160px;
  font-size: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Content = styled.section`
  background: ${({ theme }) => theme.bg[0]};
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const ContentInner = styled.div`
  position: absolute;
  inset: 0;
  overflow: auto;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Footer = styled.footer`
  display: flex;
  gap: ${({ theme }) => theme.gap.sm};
  background: ${({ theme }) => theme.bg[3]};
  padding: ${({ theme }) => theme.gap.md};
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
