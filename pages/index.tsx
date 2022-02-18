import Head from 'next/head'
import styled from 'styled-components';
import Footer from '../components/Footer';
import { PageContainer, Section as USection, LandingSlide } from '../components/layout';
import Typography from '../components/Typography';
import NavBar from '../components/NavBar';
import useScreenSize from '../hooks/screen-size';
import WhoAreWeSection from '../components/WhoAreWeSection';

const Section = styled(USection)`
  min-height: 900px;
`;

const ByLine = styled(Typography).attrs({
  variant: 'body',
})`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
`;

const HomePage: React.FC = () => {
  const screenSize = useScreenSize();
  const videoAspectRatio = 9/16
  return (
    <div>
      <Head>
      <title>Canadian Hyperloop Conference</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar version={2}/>
      <PageContainer version={2}>
        <LandingSlide version={2}>
          <Typography variant="hero">CANADIAN HYPERLOOP CONFERENCE</Typography>
        </LandingSlide>
        <Section>
          <WhoAreWeSection />
        </Section>
      </PageContainer>
    </div>
  );
}

export default HomePage;
