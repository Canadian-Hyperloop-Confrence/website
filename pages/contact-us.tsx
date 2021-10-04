import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import UButton from '../components/Button';

const Button = styled(UButton)``;

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Section = styled(USection)`
  min-height: 740px;
`;

const SocialMediaIcon = styled.img`
  height: 40px;
  width: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  ${SocialMediaIcon} {
    margin-left: 16px;
  }

  ${Button} {
    margin-right: 24px;
    margin-bottom: 8px;
  }
`;

const ContactUs = () => {
  const handleSendEmailButtonClicked = () => {
    window.open('mailto:hello@cahyperloop.ca');
  }
  const handleNewsletterSignUp = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScTRSthtrnVzxDNnuxhUHHjwh2Y2mVEDZ2fHIIqozVvVtxFUQ/viewform');
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
          <ButtonContainer>
            <Button
                variant="Primary"
                onClick={handleSendEmailButtonClicked}
              >
              Send Us an Email!
            </Button>
            <Button
                variant="Secondary"
                onClick={handleNewsletterSignUp}
              >
              Sign up for newsletter!
            </Button>
            <div>
              <a href="https://www.linkedin.com/company/cahyperloop/"><SocialMediaIcon src="linked-in.svg" /></a>
              <a href="https://www.facebook.com/cahyperloop"><SocialMediaIcon src="facebook.svg" /></a>
              <a href="https://www.instagram.com/cahyperloop/"><SocialMediaIcon src="instagram.svg" /></a>
              <a href="https://twitter.com/cahyperloop"><SocialMediaIcon src="twitter.svg" /></a>
            </div>
          </ButtonContainer>
        </Section>
        <Footer />
      </PageContainer>
    </div>
  )
};

export default ContactUs;
