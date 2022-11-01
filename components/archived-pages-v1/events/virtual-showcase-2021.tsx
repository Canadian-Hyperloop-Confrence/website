import styled from 'styled-components';
import Head from "next/head";
import Footer from "../../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../../components/layout";
import NavBar from "../../components/NavBar";
import Typography from "../../components/Typography";
import JumpTo from '../../components/JumpTo';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import Carousel from '../../components/Carousel';
import VirtualShowcaseTeams from '../../data/VirtualShowcaseTeams';
import VirtualShowcaseTeamCard from '../../components/VirtualShowcaseTeamCard';

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

const RedSubTitle = styled.h3`
  color: ${({ theme }): string => theme.palette.redA};
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: justified;

  display: inline;
`;

const ApplicationProcessList = styled.ol`
  color: ${({ theme }): string => theme.palette.redA};

  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: justified;

  ol {
    color: ${({ theme }): string => theme.palette.charcoalA};
    font-family: Questrial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.06em;
    text-align: justified;
  }

  ul {
    color: ${({ theme }): string => theme.palette.charcoalA};
    list-style-type: disc;
  }
`;

const BackToTop = styled.div`
  width: 30px;
  height: 30px;

  border-radius: 15px;

  position: fixed;

  background-color: ${({ theme }) => theme.palette.chcBlackB};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.whiteA};

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

const CalendarSpan = styled.span`
  display: flex;
  p {
    padding-left: 8px;
  }
`;

const VirtualShowCase2021 = () => {
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
    window.location.replace('/virtual-showcase-2021');
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
          <Header>Virtual Showcase 2021</Header>
        </LandingSlide>
        <Section>
          <P>
            The Canadian Hyperloop Conference Virtual Showcase took place over November 27-28, 2021!
          </P>
          <ul>
            <li><P>155 attendees in total</P></li>
            <li><P>11 design teams were represented</P></li>
            <li><P>13 different presentations were given</P></li>
            <li><P>Hyperloop Industry Representation</P></li>
          </ul>
          <div id="categories">
            <H1>Categories</H1>
            <RedSubTitle>Propulsion and Levitation Systems</RedSubTitle>
            <P>
              Systems responsible for actuating, driving, or moving the Hyperloop pod during runtime are considered to be propulsion and levitation systems. These include but are not limited to:
            </P>
            <ul>
              <li><P>Induction motors</P></li>
              <li><P>Magnets</P></li>
              <li><P>Powertrains</P></li>
            </ul>

            <RedSubTitle>Electronics</RedSubTitle>
            <P>
              The electronics category refers to any printed circuit boards (PCBs) that have been designed in-house. Examples of electronic systems include but are not limited to:
            </P>
              <ul>
                <li><P>Battery management system boards</P></li>
                <li><P>Boards used for internal and/or external communication</P></li>
                <li><P>Electronic speed controllers (motor controllers)</P></li>
                <li><P>Power distribution boards and voltage converters</P></li>
              </ul>

            <RedSubTitle>Aeroshell</RedSubTitle>
            <P>
            The aeroshell refers to the external casing for the Hyperloop pod. This may also include antennae that are mounted to the aeroshell.
            </P>

            <RedSubTitle>Mechanical &#38; Structures </RedSubTitle>
            <P>
              The mechanical and structures category refers to any physical systems on the Hyperloop pod that do not qualify for any of the above categories. These may include but are not limited to:
            </P>
              <ul>
                <li><P>Battery packs</P></li>
                <li><P>Braking systems</P></li>
                <li><P>Cooling systems</P></li>
                <li><P>Enclosures</P></li>
                <li><P>Frames and chassis</P></li>
                <li><P>Guidance and suspension systems</P></li>
              </ul>

            <RedSubTitle>Other</RedSubTitle>
            <P>
              The other category is for projects that do not qualify for any of the above categories. This may include projects outside the Hyperloop pod as well. Some projects we'd be interested in but are not limited to include:
            </P>
              <ul>
                <li><P>Constructing a track for Hyperloop pods</P></li>
                <li><P>Exceptional software or controls projects</P></li>
                <li><P>Testing systems for Hyperloop pods or subsystems</P></li>
                <li><P>Unique transportation mechanisms for Hyperloop pods </P></li>
              </ul>
          </div>
          <div id="Teams" aria-label="Teams and Presentations">
            <H1>Teams &amp; Presentations</H1>
            <Carousel
              Component={VirtualShowcaseTeamCard}
              items={VirtualShowcaseTeams}
            />
          </div>
          <BackToTop className={showScrollToTop} onClick={goToTop}>
            <KeyboardArrowUpIcon/>
          </BackToTop>
        </Section>
      </PageContainer>
    </div>
  )
};

export default VirtualShowCase2021;
