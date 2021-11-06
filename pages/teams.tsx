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
  min-height: calc(max(100vh, 740px));
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

const Image = styled.img`
  max-height: 140px;
  max-width: 220px;
`;

const CenterLink = styled.a`
  display: flex;
  align-items: center;
`;

const MiniSection = styled(Section)`
  flex-grow: 0;
  min-height: 0px;
`;

const Teams = () => {
  const renderOurTeam = OurTeam.map((member) => <HeadShot key={member.name} {...member} />);
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
        <MiniSection>
          <WaterloopTitleContainer>
            <WaterloopTitle>Waterloop </WaterloopTitle><WaterloopLogo/>
          </WaterloopTitleContainer>
          <Typography variant="body">
            Waterloop, the University of Waterloo Hyperloop Team, will be building a track in Waterloo, ON to be used for our 2022 Hyperloop Track Race. To reach out to Waterloop, please email <a href="mailto:infra@waterloop.ca">infra@waterloop.ca</a> about track related questions.
          </Typography>
        </MiniSection>
        <Section>
          <Typography variant="title">Partner Teams</Typography>
          <TeamContainer>
            <CenterLink href="http://www.mcmasterhyperloop.ca/about"><Image src="teams/mcmaster.png" alt="Mcmaster University"/></CenterLink>
            <CenterLink href="https://ryersonhyperloop.com/"><Image src="teams/RIH_Logo_BlueYellow.png" alt="Ryerson University"/></CenterLink>
            <CenterLink href="https://ca.linkedin.com/company/trillium-hyperloop"><Image src="teams/Trillium.png" alt="Trillium University"/></CenterLink>
            <CenterLink href="https://www.utht.ca/"><Image src="teams/utht.png" alt="University of Toronto"/></CenterLink>
            <CenterLink href="https://queenshyperloop.ca/"><Image src="teams/QHDT Full Name.png" alt="Queens University"/></CenterLink>
            <CenterLink href="https://www.uwinloop.ca/our-team"><Image src="teams/uwindsor.png" alt="University of Windsor"/></CenterLink>
            <CenterLink href="https://www.polyloop.ca/"><Image src="teams/PolyLoop Montréal sans fond.png" alt="Polytechnique Montréal"/></CenterLink>
            <CenterLink href="http://albertaloop.ca/"><Image src="teams/albertaloop_logo.png" alt="Alberta Loop"/></CenterLink>
          </TeamContainer>
        </Section>
      </PageContainer>
    </div>
  );
};

export default Teams;
