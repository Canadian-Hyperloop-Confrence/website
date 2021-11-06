import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import Button from '../components/Button';
import PartnersData from '../data/Partners';
import Sponsors from '../data/Sponsors';

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Section = styled(USection)`
  min-height: calc(max(100vh, 740px));
`;

const LogosContainer = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 75px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${({ theme }): string => theme.breakPoints.desktop}) {
    max-width: 50%;
  }
`;

// const HeaderBlock = styled.div`
//   width: 100%;
//   flex-grow: 1;
// `;

const Partners = () => {
  const handleSponsorButtonClicked = () => {
    window.open('mailto:business@cahyperloop.ca?subject=Become a Sponsor');
  }

  const partnerImages = PartnersData.map((partner) => <a href={partner.link} key={partner.imageSrc}><img src={partner.imageSrc} alt={partner.altText} /></a>);
  const sponsorImages = Sponsors.map((sponsor) => <a href={sponsor.link} key={sponsor.imageSrc}><img src={sponsor.imageSrc} alt={sponsor.altText} /></a>);


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
          <LogosContainer>
            <Logos>
              <Typography variant="title">Partners</Typography>
              {partnerImages}
            </Logos>
            <Logos>
              <Typography variant="title">Sponsors</Typography>
              {sponsorImages}
            </Logos>
          </LogosContainer>
          <Button
              variant="Primary"
              onClick={handleSponsorButtonClicked}
            >
              Let's Talk!
            </Button>
        </Section>
      </PageContainer>
    </div>
  )
};

export default Partners;
