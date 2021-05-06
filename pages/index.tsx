import Head from 'next/head'
import styled from 'styled-components';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const PageFooter = styled(Footer)`
  position: fixed;
  bottom: 8px;
  width: 100vw;
  text-align: center;
`;

const Body = styled.p`
  font: ${({ theme }) => theme.typography.body.regular};
  color: ${({ theme }) => theme.palette.greys[1]};

  max-width: 560px;
`;

const Header = styled.h1`
  font: ${({ theme }) => theme.typography.header.semiBold};
`;

const SecondaryButton = styled(Button)`
  img {
    padding-left: 8px;
  }
`;


const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  cursor: pointer;
  button {
    margin-right: 16px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.div`
  @media screen and (min-width: ${({theme}) => theme.breakPoints.desktop}) {
    // Desktop styles
    margin-left: 130px;
    width: 1024px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    // Mobile styles
    margin-left: 16px;
    margin-right: 14px;
  }
`;

const BodyCopy = `Encouraging teams to design technologies necessary to fulfil
our goal, develop a sense of community among Canadian Hyperloop
University Design Teams, and build industry and government
relationships by organizing a track focused annual event`;

const HeaderCopy = `Made in Canada.`;

const PrimaryButtonCopy = `Become a Sponsor`;
const SecondaryButtonCopy = `Team application form`;

export default function Home() {
  return (
      <FlexContainer>
        <Head>
          <title>Canadian Hyperloop Conference</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Content>
          <PageHeader />
          <Header>{HeaderCopy}</Header>
          <Body>{BodyCopy}</Body>
          <ButtonContainer>
            <Button
              variant="Primary"
              onClick={() => alert('hello')}>
              {PrimaryButtonCopy}
            </Button>
            <SecondaryButton
              variant="Secondary"
              onClick={() => alert('hello')}
            >
              {SecondaryButtonCopy}
              <img src="/arrow-right.svg"/>
            </SecondaryButton>
          </ButtonContainer>
        </Content>
        <PageFooter />
      </FlexContainer>
  );
}
