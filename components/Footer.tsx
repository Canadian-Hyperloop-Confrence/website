import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import GutterWrapper from './GutterWrapper';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.dark };
  padding-top: 150px;
  padding-bottom: 150px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  h5 {
    font: ${({ theme }) => theme.typography.nav };
    width: 100%;
    text-transform: uppercase;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  h6 {
    font: ${({ theme }) => theme.typography.nav };
    width: 100%;
    text-transform: uppercase;
    margin: 0px;
  }

  p, a {
    font: ${({ theme }) => theme.typography.caption };
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.palette.text.onDark};
  }
`;

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  color: ${({ theme }) => theme.palette.text.onDark };

  h2 {
    font: ${({ theme }) => theme.typography.heading3 };
    width: 100%;
  }

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
    <GutterWrapper>
      <SectionWrapper>
        <Column>
          <h2>Connect with us</h2>
          <Section>
            <h6>General Inquiries</h6>
            <p>chc@cahyperloop.com</p>
          </Section>
          <Section>
            <h6>Partners</h6>
            <p>technical@cahyperloop.com</p>
          </Section>
        </Column>
        <Column>
          <Section>
            <h5>Site Map</h5>
            <p>Virtual Showcase</p>
            <p>Conference</p>
            <p>About</p>
            <p>FAQ</p>
          </Section>
          <Section>
            <h5>Stay In the loop</h5>
            <p><a href="https://www.facebook.com/cahyperloop">Facebook</a></p>
            <p><a href="https://www.instagram.com/cahyperloop/">Instagram</a></p>
            <p><a href="https://twitter.com/cahyperloop">Twitter</a></p>
            <p><a href="https://www.youtube.com/channel/UCYC--3qbnPwe1NMiiBiLCQw/featured">Youtube</a></p>
          </Section>
        </Column>
      </SectionWrapper>
    </GutterWrapper>
  </Container>
);

export default Footer;
