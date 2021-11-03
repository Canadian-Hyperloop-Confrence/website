import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';
import { PageContainer, Section, LandingSlide } from '../components/layout';
import Typography from '../components/Typography';
import NavBar from '../components/NavBar';

const ByLine = styled(Typography).attrs({
  variant: 'body',
})`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
      <title>Canadian Hyperloop Conference</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar  selected="home"/>
      <PageContainer>
        <LandingSlide>
          <Typography variant="header">CANADIAN</Typography>
          <Typography variant="header">HYPERLOOP</Typography>
          <Typography variant="header">CONFERENCE</Typography>
          <ByLine>Leading innovation in hyperloop technologies</ByLine>
        </LandingSlide>
        <Section>
          <Typography variant="header">We Are CHC</Typography>
          <iframe width="700" height="400" src="https://www.youtube-nocookie.com/embed/gve6qAB0_4M" title="We Are CHC"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <Typography variant="title">Our Vision</Typography>
          <Typography variant="body">Hyperloop has the potential to enable the highest speed passenger transportation while simultaneously achieving the highest per-passenger-km efficiency. Hyperloop technologies promise a sustainable, economical, and reliable mode of transportation, and the goal of the CHC is to enable this future to happen, especially in Canada. We aspire to inspire Hyperloop innovation, realization, and deployment, and thereby **accelerate the sustainable future of transportation.</Typography>
          <Typography variant="title">Our Mission</Typography>
          <Typography variant="body">The annual Canadian Hyperloop Conference is dedicated to developing the technologies and policies required for a fully functioning Hyperloop pod and track, by:</Typography>
          <ul>
            <li><Typography variant="body">Encouraging the development and concrete demonstration of Hyperloop technology by challenging student teams in an annual pod demo - the Canadian Hyperloop Competition.</Typography></li>
            <li><Typography variant="body">Developing a sense of community by hosting knowledge sharing events, research and industry speakers, and a social media presence appealing to the general public.</Typography></li>
            <li><Typography variant="body">Building industry and government support through partnerships to ensure we are aligned with the growth of the global Hyperloop community and technology.</Typography></li>
          </ul>
        </Section>
        <Section>
          <Typography variant="title">Our Values</Typography>
          <Typography variant="body">CANADIAN: CHC is a Canadian organization for Canadian Hyperloop sphere, with an emphasis on involvement of university design teams.</Typography>
          <Typography variant="body">DIALOGUE: CHC offers a platform for founding university teams, future member university teams, Canadian Hyperloop sphere, international hyperloop efforts, and general audience to connect and create meaningful interactions to improve hyperloop technology.</Typography>
          <Typography variant="body">EQUALITY + EMPOWERMENT: CHC is an organization that promotes to showcase work from all levels of experience. From new teams to teams with multiple competition experience, CHC aims to address the knowledge gap and provide an open platform for teams to improve themselves.</Typography>
          <Typography variant="body">INNOVATION: CHC will initiate interest and development in previously unexplored areas related to hyperloop. CHC members will have a platform to cultivate dialogue between member schools, and tangible means to support ideas through awards, etc.</Typography>
        </Section>
        <Footer />
      </PageContainer>
    </div>
  );
}

export default HomePage;
