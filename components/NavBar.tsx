import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps, useTheme } from 'styled-components';
import Link from 'next/link';

const LinkContainer = styled.div`
  height: 100%;
  margin-right: 60px;
  display: flex;
  cursor: pointer;
`;

const LinkText = styled.p<{selected: boolean}>`
  color: ${({ theme }): string => theme.palette.chcWhite};
  margin-left: 30px;
  ${({ selected }): FlattenInterpolation<ThemeProps<DefaultTheme>> => selected ? css`
    border-bottom: 2px solid ${({ theme }): string => theme.palette.chcRed};
  ` : css``}
  cursor: pointer;
`;


const Container = styled.div`
  width: 100%;
  height: ${({ theme }): string => theme.constants.navbarHeight};

  background-color: ${({ theme }): string => theme.palette.chcBlackA};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 30px;

  position: fixed;
  top: 0;
  left: 0;
`;

const MobileNavMenuContainer = styled.div<{ open: boolean}>`
  position: fixed;
  top: 0;
  right: 0;
  width:  100%;
  height: 100vh;
  display: ${({ open }) => open ? 'visible' : 'none'};

  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const MobileNavMenu = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 10px;
  padding-top: 10vh;

  background-color: ${({ theme }): string => theme.palette.chcBlackA};
  opacity: 100%;
  ${LinkText} {
    color: ${({ theme }):string => theme.palette.chcWhite};
    text-align: end;
  }
  z-index: 20;
`;

const links: INavLink[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'FAQ',
    to: '/faq',
  },
  {
    label: 'Partners',
    to: '/partners',
  },
  {
    label: 'Teams',
    to: '/teams',
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
  },
];

type TSelected = 'home' | 'faq' | 'partners' | 'teams' | 'contact us'

interface Props {
  selected: TSelected
}

const useBreakpoint = (breakpoint: string): boolean => {
  const [biggerThanBreakPoint, setBiggerThanBreakPoint] = useState<boolean>(false);
  const [size] = useState<number>(parseInt(breakpoint.slice(0, breakpoint.length-2), 10));
  useEffect(() => {
    setBiggerThanBreakPoint(window.innerWidth > size);
    window.addEventListener('resize', () => {
      setBiggerThanBreakPoint(window.innerWidth > size)
    });
    return function unMount() {
      window.removeEventListener('resize', () => {
        setBiggerThanBreakPoint(window.innerWidth > parseInt(breakpoint.slice(0, breakpoint.length-2), 10))
      });
    }
  });
  return biggerThanBreakPoint;
}

const NavBar: React.FC<Props> = ({ selected }) =>  {
  const theme = useTheme();
  const isDesktop = useBreakpoint(theme.breakPoints.desktop);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setNavMenuOpen(true);
  }, [setNavMenuOpen]);

  const closeMenu = useCallback(() => {
    setNavMenuOpen(false);
  }, [setNavMenuOpen]);

  return isDesktop ? (
    <Container>
      <img src="/chc-logo.svg"/>
      <LinkContainer>
        {links.map((link, index) => (
          <Link href={link.to} key={index}>
            <LinkText selected={link.label.toLowerCase() === selected}>{link.label}</LinkText>
          </Link>
        ))}
      </LinkContainer>
    </Container>
  ) : (
    <Container>
      <img src="/chc-logo.svg"/>
      <LinkContainer>
        <img src="/menu.svg" onClick={openMenu}/>
      </LinkContainer>
      <MobileNavMenuContainer open={navMenuOpen} onClick={closeMenu}>
        <MobileNavMenu>
          {links.map((link, index) => (
            <Link href={link.to} key={index}>
              <LinkText selected={link.label.toLowerCase() === selected}>{link.label}</LinkText>
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNavMenuContainer>
    </Container>
  );
}

export default NavBar;
