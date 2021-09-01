import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import JumpTo from '../components/JumpTo';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';

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
  color: ${({ theme }): string => theme.palette.chcRed};
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
  color: ${({ theme }): string => theme.palette.chcRed};

  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: justified;

  ol {
    color: ${({ theme }): string => theme.palette.chcBlackA};
    font-family: Questrial;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.06em;
    text-align: justified;
  }

  ul {
    color: ${({ theme }): string => theme.palette.chcBlackA};
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
      <NavBar selected="virtual showcase"/>
      <PageContainer>
        <LandingSlide>
          <Header>Virtual Showcase</Header>
        </LandingSlide>
        <Section>
          <Typography variant="body">
            The Canadian Hyperloop Showcase is a great venue for university level hyperloop design teams to showcase their work in a virtual setting and connect with other teams!
          </Typography>
          <JumpTo sections={[
            { name: 'Eligibility', link: '#eligibility' },
            { name: 'Calendar', link: '#calendar' },
            { name: 'Application Process', link: '#application' },
            { name: 'Catagories', link: '#catagories' },
            { name: 'Criteria', link: '#criteria' },
            { name: 'Questions', link: '#questions' },
          ]} />
          <div id="eligibility">
            <H1>Eligibility</H1>
            <P>To be eligible for the Virtual Showcase, teams must adhere to the following requirements:
              <ol>
                <li>Only student teams composed of undergraduate and graduate students enrolled as of the initial registration deadline are permitted to compete. Members outside this category may only hold advisory roles and are subject to all the regulations in Criterion 2.</li>
                <li>Advisors are permitted and encouraged to attend the Virtual Showcase but cannot: Answer questions during technical interviews with the Canadian Hyperloop Conference on behalf of the team.
Be a lead contributor to the manufacturing, designing, or engineering of any components, systems, or modules.
Directly edit, write, or create any content in team documents, presentations, or schematics submitted to the Canadian Hyperloop Conference.
Lead administrative or logistical duties such as finances, member recruitment, registration, and team planning.</li>
                <li>Teams should submit work in English and prepare to present in English.</li>
              </ol>
            </P>
          </div>
          <div id="calendar">
            <H1>Calendar</H1>
            <P><RedSubTitle>September 30th, 23:59 EST:</RedSubTitle> Project Descriptions due</P>
            <P><RedSubTitle>October 23rd, 23:59 EST:</RedSubTitle> Advancing Teams Announced</P>
            <P><RedSubTitle>November 20th, 23:59 EST:</RedSubTitle> Advancing Teams Presentation Submission Deadline</P>
            <P><RedSubTitle>November 27-28th:</RedSubTitle> Virtual Showcase</P>
          </div>
          <div id="application">
            <H1>Application Process</H1>
            <ApplicationProcessList>
              <li>
                <RedSubTitle>Project Description:</RedSubTitle>
                <ol>
                  <li><P>Teams who intend to participate in the virtual showcase need to send the <a href="https://docs.google.com/document/d/1l33KTgBi3GmkG-SpuR0XsYe3CyoM_I6XDWArkl_ue8M/edit?usp=sharing">Project Description Form</a> by September 30th, EST to <a href="mailto:chc@cahyperloop.ca">chc@cahyperloop.ca</a> , using "Virtual Showcase Application" subject line. Unless an extension has been announced, late submissions will not be accepted. </P></li>
                  <li><P>There are 4 categories each team can submit a project description for. Please see sub-categories for more information.</P></li>
                  <li><P>The number of categories you write a project description for will not affect whether your team gets selected or not.</P></li>
                  <li><P>Only your latest project description application will be considered.</P></li>
                </ol>
              </li>
              <li>
                <RedSubTitle>Advancing teams:</RedSubTitle>
                <ul>
                  <li><P>Between September 30th and October 23rd, CHC Technical team will review project descriptions.</P></li>
                  <li><P>CHC Technical team will select those who are fit to present for the virtual showcase based on advancement criterion.</P></li>
                  <li><P>Those who are selected will be notified by October 23rd, 23:59 EST. </P></li>
                </ul>
              </li>
              <li>
                <RedSubTitle>Presentations:</RedSubTitle>
                <ul>
                  <li><P>Based on the number of applicants, details about the presentations will be decided by October 23rd.</P></li>
                  <li><P>Teams will receive directions on the presentations by October 23rd, 23:59 EST if they advance.</P></li>
                  <li><P>Advancing teams have until November 20th, 23:59 EST to submit their presentations, but we encourage them to submit earlier.</P></li>
                </ul>
              </li>
              <li>
                <RedSubTitle>Showcase:</RedSubTitle>
                <ul>
                  <li><P>CHC Virtual Showcase will take place on November 27-28. The complete schedule will be announced later. </P></li>
                  <li><P>The virtual showcase will have an open registration and live-streamed through web platforms.</P></li>
                </ul>
              </li>
            </ApplicationProcessList>
          </div>
          <div id="catagories">
            <H1>Categories</H1>
            <RedSubTitle>Propulsion and Levitation Systems</RedSubTitle>
            <P>
              Systems responsible for actuating, driving, or moving the Hyperloop pod during runtime are considered to be propulsion and levitation systems. These include but are not limited to:
              <ul>
                <li>Induction motors</li>
                <li>Magnets</li>
                <li>Powertrains</li>
              </ul>
            </P>

            <RedSubTitle>Electronics</RedSubTitle>
            <P>
              The electronics category refers to any printed circuit boards (PCBs) that have been designed in-house. Examples of electronic systems include but are not limited to:
              <ul>
                <li>Battery management system boards</li>
                <li>Boards used for internal and/or external communication</li>
                <li>Electronic speed controllers (motor controllers)</li>
                <li>Power distribution boards and voltage converters</li>
              </ul>
            </P>

            <RedSubTitle>Aeroshell</RedSubTitle>
            <P>
            The aeroshell refers to the external casing for the Hyperloop pod. This may also include antennae that are mounted to the aeroshell.
            </P>

            <RedSubTitle>Mechanical &#38; Structures </RedSubTitle>
            <P>
              The mechanical and structures category refers to any physical systems on the Hyperloop pod that do not qualify for any of the above categories. These may include but are not limited to:
              <ul>
                <li>Battery packs</li>
                <li>Braking systems</li>
                <li>Cooling systems</li>
                <li>Enclosures</li>
                <li>Frames and chassis</li>
                <li>Guidance and suspension systems</li>
              </ul>
            </P>

            <RedSubTitle>Other</RedSubTitle>
            <P>
              The other category is for projects that do not qualify for any of the above categories. This may include projects outside the Hyperloop pod as well. Some projects we'd be interested in but are not limited to include:
              <ul>
                <li>Constructing a track for Hyperloop pods</li>
                <li>Exceptional software or controls projects</li>
                <li>Testing systems for Hyperloop pods or subsystems</li>
                <li>Unique transportation mechanisms for Hyperloop pods </li>
              </ul>
            </P>
          </div>
          <div id="criteria">
            <H1>Criteria</H1>
            <P>
              We expect each project description to provide the following information:
              <ul>
                <li>A brief explanation of what your team is presenting</li>
                <li>A list of the technical specifications of your system</li>
                <li>The reason why your system is unique and of interest to student Hyperloop teams</li>
                <li>The current stage of your project (design, manufacturing, assembly, testing, redesign, or complete)</li>
                <li>A clear explanation of which parts of the system were designed, programmed, and manufactured by team members and which were purchased from vendors, use publicly available software libraries, or reference external designs</li>
                <li>An explanation of any unique factors that influenced your system during any of its stages and/or the next big milestones and challenges for the project</li>
              </ul>
            </P>
          </div>
          <div id="questions">
            <H1>Questions</H1>
            <P>We will be hosting several sessions going over showcase details, follow us on our social media accounts.</P>
            <P>If you have any further questions, please send us an email at <a href="mailto:chc@cahyperloop.ca?subject=Question">chc@cahyperloop.ca</a> with subject line "Question".</P>
          </div>
          <BackToTop className={showScrollToTop} onClick={goToTop}>
            <KeyboardArrowUpIcon/>
          </BackToTop>
        </Section>
        <Footer />
      </PageContainer>
    </div>
  )
};

export default VirtualShowCase;
