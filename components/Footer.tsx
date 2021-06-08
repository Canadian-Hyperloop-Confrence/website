import React from 'react';
import styled from 'styled-components';
import Link from 'next/Link';

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
`;

const LinkText = styled.p`
  color: ${({ theme }): string => theme.palette.chcWhite};
  margin-left: 30px;
`;


const Container = styled.div`
  width: calc(100% - 30px);
  padding-right: 30px;
  height: ${({ theme }): string => theme.constants.footerHeight};

  background-color: ${({ theme }): string => theme.palette.chcBlackA};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

interface Props {
  links: INavLink[];
}

const Footer: React.FC<Props> = ({ links }) => {

  console.log(links)
  return (
    <Container>
      <LinkText>CHC	&#169; 2021</LinkText>
      <LinkContainer>
        {links.map((link) => (
          <Link href={link.to}>
            <LinkText>{link.label}</LinkText>
          </Link>
        ))}
      </LinkContainer>
    </Container>
  );
};

export default Footer;
