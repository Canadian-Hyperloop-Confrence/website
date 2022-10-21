import styled from 'styled-components';
import Head from "next/head";
import { LandingSlide, PageContainer, Section as USection } from "../../layout";
import NavBar from "../../NavBar";
import Typography from "../../Typography";
import JumpTo from '../JumpTo';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import Carousel from '../Carousel';
import VirtualShowcaseTeams from '../../../data/VirtualShowcaseTeams';
import VirtualShowcaseTeamCard from '../../VirtualShowcaseTeamCard';
import Button from '../../Button';
import Files from '../../../data/files';
import ListContainer from '../../ListContainer';

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Section = styled(USection)`
  min-height: 740px;
`;

const P = styled(Typography).attrs({
  variant: 'body'
})``;

const H1 = styled(Typography).attrs({
  variant: 'title'
})``;

const BackToTop = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 15px;

  position: fixed;

  background-color: ${({ theme }) => theme.palette.chcBlackB};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.chcWhite};

  cursor: pointer;

  &.show {
    bottom: 60px;
    right: 15px;
  }

  &.hide {
    bottom: -30px;
    right: 15px;
  }

  transition: bottom 0.5s;
`;

const Downloads = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -32px;
  ${Button} {
    margin-bottom: 8px;
    font-family: Montserrat;
  }
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ImportantDates = styled.div`
  width: 100%;
`;

const VirtualShowCase = () => {
  const [showScrollToTop, setShowScrollToTop] = useState<'hide' | 'show'>('hide');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 0.75) {
        setShowScrollToTop('show');
      } else {
        setShowScrollToTop('hide');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const goToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
    });
    window.location.replace('/virtual-showcase');
  }, []);
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{'html { scroll-behavior: smooth; }'}</style>
      </Head>
      <NavBar />
      <PageContainer>
        <LandingSlide>
          <Header>Virtual Showcase 2022</Header>
        </LandingSlide>
        <Section>
          <Downloads id="downloads">
            <a href={Files['virtual-showcase-application-form'][0].src}><Button>Download Application Form</Button></a>
            <a href={Files['virtual-showcase-package'][0].src}><Button variant="Secondary">Download Application Guide</Button></a>
          </Downloads>
          <div id="explanation">
            <H1>What is the Virtual Showcase</H1>
            <P>
            The Virtual Showcase is an online event where student design teams can showcase their
            research/prototypes/designs for hyperloop pods or hyperloop infrastructure. The event is a
            great opportunity for hyperloop student design teams to exchange learnings and in turn create a
            collaborative hyperloop community. The event will consist of brief presentations from every
            participating team about a chosen subsystem followed by questions from the audience.
            </P>
          </div>
          <div id="enrollment">
            <H1>How to enroll in the Virtual Showcase</H1>
            <P>
            The participating team will have to submit the <a download href={Files['virtual-showcase-application-form'][0].src}>Virtual Showcase Application Document</a> to this <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3tuv6sMP7AG8fdGzgGdoBEj_H1MuMkEKEn6dwH4pkO561dA/viewform">google form</a> by <strong>Nov 1, 2022</strong>. This document will contain details of the system(s) that the team wishes to present at the virtual showcase event. Once submitted the document will be reviewed by the CHC technical team, and the participating team will be informed of the systems selected for presentation by <strong>Nov 3, 2022</strong>. There are a total of 14 categories from which teams can apply for any 4. All categories are mentioned below.
            </P>
            <P>
                Once the team is informed of the category or categories they have been selected to present in,
                they will be instructed to prepare a presentation. This presentation will be submitted back to the
                CHC technical team for a final review on <strong>Nov 13, 2022</strong>. Once the final review is complete teams
                will receive email confirmation from the CHC technical team.
            </P>
          </div>
          <ImportantDates id="important-dates">
            <H1>Important Dates</H1>
            <ListContainer>
              <ListItem>
                <P>Application opens</P>
                <P>1 Oct. 2022</P>
              </ListItem>
              <ListItem>
                <P>Application deadline</P>
                <P>1 Nov. 2022</P>
              </ListItem>
              <ListItem>
                <P>Final presentation submission deadline</P>
                <P>13 Nov. 2022</P>
              </ListItem>
              <ListItem>
                <P>Virtual Showcase Event</P>
                <P>19-20 Nov. 2022</P>
              </ListItem>
            </ListContainer>
          </ImportantDates>
          <BackToTop className={showScrollToTop} onClick={goToTop}>
            <KeyboardArrowUpIcon/>
          </BackToTop>
        </Section>
      </PageContainer>
    </div>
  )
};

export default VirtualShowCase;
