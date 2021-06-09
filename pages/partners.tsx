import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import Button from '../components/Button';

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Section = styled(USection)`
  min-height: 740px;
`;

const Partners = () => {
  const handleSponsorButtonClicked = () => {
    window.open('mailto:hello@cahyperloop.ca?subject=Become a Sponsor');
  }
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar selected="partners"/>
      <PageContainer>
        <LandingSlide>
          <Header>PARTNERS AND SPONSORS</Header>
        </LandingSlide>
        <Section>
          <Typography variant="title">Made in Canada.</Typography>
          <Typography variant="body">The Canadian Hyperloop Conference is looking for Partners and Sponsors. We are encouraging teams to design technologies necessary to fulfil our goal, develop a sense of community among Canadian Hyperloop University Design Teams, and build industry and government relationships by organizing a track focused annual event. We are looking for strong reliable partners who share our vision!</Typography>
          <Button
              variant="Primary"
              onClick={handleSponsorButtonClicked}
            >
              Become a Sponsor
            </Button>
        </Section>
        <Footer />
      </PageContainer>
    </div>
  )
};

export default Partners;
