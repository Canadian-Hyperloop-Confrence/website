import React, { useMemo } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
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

const NavBar: React.FC<Props> = ({ selected }) =>  (
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
);


export default NavBar;
