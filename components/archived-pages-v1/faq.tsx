import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer as UPageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";

const PageContainer = styled(UPageContainer)`
  ul {
    margin: 0;
    margin-bottom: 40px;
  }
  li {
    p {
      margin: 0;
    }
  }
`;

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const RedTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }): string => theme.palette.chcRed};
  font: ${({ theme }): string => theme.typography.faq.semiBold};
`;


const Section = styled(USection)`
    min-height: calc(max(100vh, 740px));
`;

const FAQ = () => {
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <PageContainer>
        <LandingSlide>
          <Header>FAQ</Header>
        </LandingSlide>
        <Section>
          <RedTitle >Who are we?</RedTitle>
          <Typography variant="body">We are a group of students from all fields and backgrounds who are passionate about changing the transportation technology landscape in Canada. </Typography>
          <RedTitle >What is the Canadian Hyperloop Conference?</RedTitle>
          <Typography variant="body">Canadian Hyperloop Conference is an organization that organizes events for all participating international hyperloop design teams in order to </Typography>
          <ul>
            <li><Typography variant="body">Showcase Canadian and International Hyperloop efforts</Typography></li>
            <li><Typography variant="body">Encourage collaboration and innovation</Typography></li>
            <li><Typography variant="body">Connect Hyperloop teams, industries, researchers, and audiences</Typography></li>
          </ul>
          <RedTitle>When is the Canadian Hyperloop Conference</RedTitle>
          <Typography variant="body">Canadian Hyperloop Conference will hold multiple events throughout the year. To learn more about our events, you can sign up to our newsletter. </Typography>
          <RedTitle>Where is the Canadian Hyperloop Conference</RedTitle>
          <Typography variant="body">The majority of our 2021 events will take place online. Our 2022 Hyperloop competition will take place in Waterloo, ON, Canada.</Typography>
        </Section>
      </PageContainer>
    </div>
  )
};

export default FAQ;
