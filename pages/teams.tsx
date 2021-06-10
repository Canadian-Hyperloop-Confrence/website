import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import HeadShot from '../components/Headshot';
import OurTeam from '../data/OurTeam';

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Section = styled(USection)`
  min-height: 740px;
`;

const OurTeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  img {
    padding: 16px;
  }
`;

const WaterloopLogo = styled.img.attrs({
  src: '/waterloop-w.svg',
  alt: 'Waterloop Logo'
})`
  height: 28px;
  width: auto;
  padding-left: 8px;
`;

const WaterloopTitle = styled(Typography).attrs({
  variant: 'title',
})`
`;

const WaterloopTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
`;

const Ryerson = styled.img`
  /* Hack b/c Ryerson logo is weird */
  margin-top: -19px;
`;

const Teams = () => {
  const renderOurTeam = OurTeam.map((member) => <HeadShot {...member} />)
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar selected="teams"/>
      <PageContainer>
        <LandingSlide>
          <Header>PARTICIPATING TEAMS</Header>
        </LandingSlide>
        <Section>
          <Typography variant="title">Our Team</Typography>
          <OurTeamContainer>
            {renderOurTeam}
          </OurTeamContainer>
        </Section>
        <Section>
          <WaterloopTitleContainer>
            <WaterloopTitle>Waterloop </WaterloopTitle><WaterloopLogo/>
          </WaterloopTitleContainer>
          <Typography variant="body">
            Waterloop, the University of Waterloo Hyperloop Team, will be building a track in Waterloo, ON to be used for our 2022 Hyperloop Track Race. To reach out to Waterloop, please email <a href="mailto:infra@waterloop.ca">infra@waterloop.ca</a> about track related questions.
          </Typography>
          <Typography variant="title">Partner Teams</Typography>
          <TeamContainer>
            <a href="http://www.mcmasterhyperloop.ca/about"><img src="mcmaster.png" alt="Mcmaster University"/></a>
            <a href="https://teamwaterloop.ca/"><img src="uwaterloo.png" alt="University of Waterloo"/></a>
            <a href="https://ryersonhyperloop.com/"><Ryerson src="ryerson.png" alt="Ryerson University"/></a>
            <a href="https://www.utht.ca/"><img src="uot.png" alt="University of Toronto"/></a>
            <a href="https://queenshyperloop.ca/"><img src="queens.png" alt="Queens University"/></a>
            <a href="https://www.uwinloop.ca/our-team"><img src="uwindsor.png" alt="University of Windsor"/></a>
          </TeamContainer>
        </Section>
        <Footer />
      </PageContainer>
    </div>
  )
};

export default Teams;
