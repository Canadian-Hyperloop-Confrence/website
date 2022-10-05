import React, { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps, useTheme } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useBreakpoint from '../hooks/break-point';

const LinkContainer = styled.div`
  height: 100%;
  margin-right: 60px;
  display: flex;
  cursor: pointer;
`;

const LinkTextV1 = styled.p<{selected: boolean}>`
  color: ${({ theme }): string => theme.palette.chcWhite};
  margin-left: 30px;
  ${({ selected }): FlattenInterpolation<ThemeProps<DefaultTheme>> => selected ? css`
    border-bottom: 2px solid ${({ theme }): string => theme.palette.chcRed};
  ` : css``}
  cursor: pointer;
  font: ${({ theme }): string => theme.typography.nav.regular};
  align-self: flex-start;
`;

const LinkTextV2 = styled.p<{selected: boolean}>`
  color: ${({ theme }): string => theme.palette.chcBlackA};
  margin-left: 30px;
  ${({ selected }): FlattenInterpolation<ThemeProps<DefaultTheme>> => selected ? css`
    border-bottom: 2px solid ${({ theme }): string => theme.palette.chcRed};
  ` : css``}
  cursor: pointer;
  font: ${({ theme }): string => theme.typography.nav.regular};
  align-self: flex-start;
`;

const ContainerV1 = styled.div`
  width: 100%;
  min-height: ${({ theme }): string => theme.constants.navbarHeight};
  height: fit-content;

  background-color: ${({ theme }): string => theme.palette.chcBlackA};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 30px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const ContainerV2 = styled(ContainerV1)`
  background-color: ${({ theme }): string => theme.palette.chcWhite};
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

const MobileNavMenuV1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 30%;
  width: fit-content;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 10px;
  padding-top: 10vh;

  background-color: ${({ theme }): string => theme.palette.chcBlackA};
  opacity: 100%;
  ${LinkTextV1} {
    color: ${({ theme }):string => theme.palette.chcWhite};
    text-align: end;
  }
  z-index: 20;
`;

const MobileNavMenuV2 = styled(MobileNavMenuV1)`
  background-color: ${({ theme }): string => theme.palette.chcWhite};
  ${LinkTextV2} {
    color: ${({ theme }):string => theme.palette.chcBlackA};
  }
`;

const CHCLogo = styled.img.attrs({
  src: '/chc-logo-large.svg'
})`
  width: 64px;
  align-self: flex-start;
`;

const ExtendedNavSection = styled.div`
  min-height: max-content;
  ${LinkTextV1}:first-child {
    padding-right: 4px;
  }
  ${LinkTextV1}:not(:first-child) {
    margin-top: 0px;
  }
  ${LinkTextV2}:first-child {
    padding-right: 4px;
  }
  ${LinkTextV2}:not(:first-child) {
    margin-top: 0px;
  }
`;

const FloatingContainer = styled.div`
  position: fixed;
`;

const links: (INavLink | INavPrefix)[] = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'FAQ',
    to: '/faq',
  },
  {
    prefix: '/events',
    label: 'Events',
    routes: [
      {
        label: 'Virtual Showcase 2022',
        to: '/events/virtual-showcase'
      },
      {
        label: 'Virtual Showcase 2021',
        to: '/events/virtual-showcase-2021'
      },
      {
        label: 'Competition',
        to: '/events/competition'
      }
    ]
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
  {
    label: 'Updates',
    to: '/updates'
  },
];

function isPrefix(object: object): object is INavPrefix {
  return 'prefix' in object
}


const useCurrentPage = (): string => {
  const { pathname } = useRouter();
  return pathname;
}

const NavBlock = ({
  open,
  onClick,
  navprefix,
  currentPage,
  version=1
} : {
  open: boolean;
  onClick: () => void;
  navprefix: INavPrefix;
  currentPage: string;
  version?: 1 | 2
}): React.ReactElement => {
  const [LinkText] = useMemo(() => {
    switch(version) {
      case 1:
        return [LinkTextV1];
      case 2:
        return [LinkTextV2];
    }
  }, [version]);
  return (
    <ExtendedNavSection onClick={onClick}>
      <div style={{ display: 'flex' }}>
        <LinkText className={open ? 'open' : ''} selected={!open && currentPage.startsWith(navprefix.prefix)}>
          {navprefix.label}
        </LinkText>
        <img style={{
          filter: version === 1 ? 'invert(0)' : 'invert(1)'
        }} src={open ? '/chevron-down.svg' : '/chevron-right.svg'}/>
      </div>
      <FloatingContainer>
        { open &&
          navprefix.routes.map((link, index) => (
            <Link href={link.to} key={index}>
              <LinkText selected={link.to === currentPage}>{link.label}</LinkText>
            </Link>
          ))
        }
      </FloatingContainer>
    </ExtendedNavSection>
  )
}

const reducer = (state: Record<string, INavPrefix & { open: boolean }>, {
  type,
  prefix,
} : { type: string, prefix: string }) => {
  const initial = type === 'close' ? '' : state[prefix].open;
  Object.keys(state).forEach((key) => {
    state[key].open = false;
  });
  if (type !== 'close') {
    state[prefix].open = !initial;
  }
  return {
    ...state
  }
}

const useScrollHandler = (onScroll: () => void) => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [onScroll]);
}

interface Props {
  version?: 1 | 2
}

const NavBar = ({ version=1 }: Props): React.ReactElement =>  {
  const theme = useTheme();
  const isDesktop = useBreakpoint(theme.breakPoints.desktop);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const currentPage = useCurrentPage();
  const [state, dispatch] = useReducer(
    reducer,
    links
    .filter<INavPrefix>((link): link is INavPrefix => isPrefix(link))
    .reduce<Parameters<typeof reducer>[0]>((acc, cur: INavPrefix) => ({
      ...acc,
      [cur.prefix]: {
        ...cur,
        open: false,
      }
    }), {}));

  const handleScroll = useCallback(() => {
    dispatch({ type: 'close', prefix: ''})
  }, [dispatch]);
  useScrollHandler(handleScroll);

  const openMenu = useCallback(() => {
    setNavMenuOpen(true);
  }, [setNavMenuOpen]);

  const closeMenu = useCallback(() => {
    setNavMenuOpen(false);
  }, [setNavMenuOpen]);

  const [MobileNavMenu, Container, LinkText] = useMemo(() => {
    switch(version) {
      case 1:
        return [MobileNavMenuV1, ContainerV1, LinkTextV1];
      case 2:
        return [MobileNavMenuV2, ContainerV2, LinkTextV2];
    }
  }, [version]);

  return isDesktop ? (
    <Container>
      <CHCLogo/>
      <LinkContainer>
        {links.map((link, index) => {
          if (isPrefix(link)) {
            return (
              <NavBlock version={version} currentPage={currentPage} navprefix={link} open={state[link.prefix].open} onClick={() => dispatch({ prefix: link.prefix, type: 'open'})}/>
            );
          } else { return (
            <Link href={link.to} key={index}>
              <LinkText selected={link.to === currentPage}>{link.label}</LinkText>
            </Link>
          )}
        }
        )}
      </LinkContainer>
    </Container>
  ) : (
    <Container>
      <CHCLogo/>
      <LinkContainer>
        <img src="/menu.svg"  onClick={openMenu}/>
      </LinkContainer>
      <MobileNavMenuContainer open={navMenuOpen} onClick={closeMenu}>
        <MobileNavMenu>
          {links.map((link, index) => {
            if (isPrefix(link)) {
              return link.routes.map((route, index) => (
                <Link href={route.to} key={index}>
                  <LinkText selected={route.to === currentPage}>{route.label}</LinkText>
                </Link>
              ))
            } else {
              return (
                <Link href={link.to} key={index}>
                  <LinkText selected={link.to === currentPage}>{link.label}</LinkText>
                </Link>
              );
            }
          })}
        </MobileNavMenu>
      </MobileNavMenuContainer>
    </Container>
  );
}

export default NavBar;
