import React, { useMemo } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import Link from 'next/Link';

const LinkContainer = styled.div`
  height: 100%;
  margin-right: 60px;
  display: flex;
`;

const LinkText = styled.p<{selected: boolean}>`
  color: ${({ theme }): string => theme.palette.chcWhite};
  margin-left: 30px;
  ${({ selected }): FlattenInterpolation<ThemeProps<DefaultTheme>> => selected ? css`
    text-decoration: underline;
    text-decoration-color: ${({ theme }): string => theme.palette.chcRed};
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

interface Props {
  links: INavLink[];
}

const NavBar: React.FC<Props> = ({ links }) => {

  console.log(links)
  return (
    <Container>
      <img src="/chc-logo.svg"/>
      <LinkContainer>
        {links.map((link) => (
          <Link href={link.to}>
            <LinkText selected={link.selected}>{link.label}</LinkText>
          </Link>
        ))}
      </LinkContainer>
    </Container>
  );
};

export default NavBar;
