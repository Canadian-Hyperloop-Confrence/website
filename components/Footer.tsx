import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  cursor: pointer;
`;

const LinkText = styled.p`
  color: ${({ theme }): string => theme.palette.whiteA};
  margin-left: 30px;
  cursor: pointer;
  font: ${({ theme }): string => /* theme.typography.nav.regular*/''};
  align-self: center;
`;


const Container = styled.div`
  width: calc(100% - 30px);
  padding-right: 30px;
  height: ${({ theme }): string => theme.constants.footerHeight};

  background-color: ${({ theme }): string => theme.palette.charcoalA};

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

const links: INavLink[] = [
  {
    label: 'FAQ',
    to: '/faq',
  },
  {
    label: 'Contact Us',
    to: '/contact-us',
  },
];

const Footer: React.FC = () => (
  <Container>
    <LinkText>CHC	&#169; 2021</LinkText>
    <LinkContainer>
      {links.map((link) => (
        <Link href={link.to} key={link.to}>
          <LinkText>{link.label}</LinkText>
        </Link>
      ))}
    </LinkContainer>
  </Container>
);

export default Footer;
