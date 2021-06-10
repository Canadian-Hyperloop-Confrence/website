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

const ContactUs = () => {
  const handleSendEmailButtonClicked = () => {
    window.open('mailto:hello@cahyperloop.ca');
  }
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar selected="contact us"/>
      <PageContainer>
        <LandingSlide>
          <Header>CONTACT US</Header>
        </LandingSlide>
        <Section>
          <Typography variant="title">Reach out!</Typography>
          <Typography variant="body">Are you a Hyperloop team looking to take part in the Canadian Hyperloop conference, or a sponsor looking to lend a hand? Then get in touch with us!</Typography>
          <Button
              variant="Primary"
              onClick={handleSendEmailButtonClicked}
            >
              Send Us an Email
            </Button>
        </Section>
        <Footer />
      </PageContainer>
    </div>
  )
};

export default ContactUs;
