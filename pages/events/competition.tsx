import Head from 'next/head';
import styled, { useTheme } from 'styled-components';
import React from 'react'
import { LandingSlide, PageContainer as UPageContainer, Section as USection } from "../../components/layout";
import NavBar from '../../components/NavBar';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import Link from 'next/link';

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
  ol {
    counter-reset: list;
  }

  ol > li {
      list-style: none;
      position: relative;
      padding-bottom: 16px;
  }

  ol > li:before {
      content: counter(list) ") ";
      counter-increment: list;
      left: -40px;
      padding-right: 10px;
      position: absolute;
      text-align: right;
      width: 40px;
  }

  table {
    font: normal 20px Questrial;

    tr>td {
      margin-bottom: 8px;
      margin-top: 13px;
    }
  }
`;

const DateCell = styled.td`
  filter: invert(29%) sepia(63%) saturate(5461%) hue-rotate(346deg) brightness(90%) contrast(96%);;
  display: flex;
  ::before {
    background: url(/calendar.svg);
    content: " ";
    padding-right: 28px;
    padding-bottom: 29px;
    transform: scale(0.75) translate(-2px, -4px);
  }
`;

const DashCell = styled.td`
  color: red;
  ::before {
    content: "  -  ";
    padding-right: 16px;
    padding-left: 4px;
  }
`;

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Body = styled(Typography).attrs({
  variant: 'body'
})`

`;

const BodyCentered = styled(Body)`
  text-align: center;
  width: 100%;
`;

const BodyCenteredStrong = styled(BodyCentered)`
  &.typography {
    font-weight: 900;
  }
`;

const Title = styled(Typography).attrs({
  variant: 'title'
})``;

const Section = styled(USection)``;

const SubTitle = styled(Typography).attrs({
  color: 'red',
  variant: 'subtitle'
})``;

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.chcBlackA};

  &:hover {
    text-decoration: underline;
    text-decoration-color: #E42B2B;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  button {
    margin-right: 8px;
  }
`;

const AwardTable = styled.table`
  thead tr th {
    background-color: ${({ theme }) => theme.palette.greys[4]};
    border-bottom: 2px solid ${({ theme }) => theme.palette.greys[3]};
    border-left: 2px solid ${({ theme }) => theme.palette.greys[3]};
  }
  thead tr :first-child {
    border-left: 2px solid ${({ theme }) => theme.palette.greys[4]};
  }
  border-spacing: 0;
  * {
    margin: 4px;
    text-align: center;
  }
  td {
    height: 60px;
  }
  border: 2px solid ${({ theme }) => theme.palette.greys[4]};
  border-bottom: 1px;
  td {
    border-bottom: 2px solid ${({ theme }) => theme.palette.greys[3]};
    border-left: 2px solid ${({ theme }) => theme.palette.greys[3]};
  }
`;

const Competition = () => {
  const theme = useTheme();
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <PageContainer>
        <LandingSlide>
          <Header>Competition</Header>
        </LandingSlide>
        <Section>
          <BodyCenteredStrong>
            Applications for the 2022 Canadian Hyperloop Competition is currently closed.
          </BodyCenteredStrong>
          <BodyCentered>
            The Timeline presented here is tentative, and may be subjected to change.
          </BodyCentered>
          <BodyCentered>
            The 2022 CHC competition will be an in-person event in May 2022 that takes place at the University of Waterloo in Waterloo, Ontario Canada. University teams from across Canada and internationally are welcomed to apply and to participate. CHC will be holding two competitions during the in-person event.
          </BodyCentered>
            <LinkContainer>
              <Link href="/rulebook"><Button>Rulebook</Button></Link>
              <Link href="/documents/CHC 2022_Final Design Package Criteria 1.1.pdf"><Button>Final Design Package</Button></Link>
              {/* <Link href="/rulebook"><Button>Testing and Safety</Button></Link> */}
              <Link href="/documents/CHC_Awards_Descriptions.pdf"><Button>Awards</Button></Link>
            </LinkContainer>
          <Title>
            Competitions
          </Title>
          <SubTitle>
          Participating teams have the option to enter either one or both of the following competitions:
          </SubTitle>
          <ol>
            <li><Body>Track Demonstration</Body></li>
            <li><Body>Technology Showcase</Body></li>
          </ol>
          <Body>
            Please <StyledLink href="https://cahyperloop.us5.list-manage.com/subscribe?u=ff0cb954d24bd916e6784d258&id=2f43d4e751](https://cahyperloop.us5.list-manage.com/subscribe?u=ff0cb954d24bd916e6784d258&id=2f43d4e751">sign up</StyledLink> for our newsletter to stay in touch with the latest updates in terms of requirements and deadlines, or email technical@cahyperloop.ca if you have any specific concerns.
          </Body>
          <Title>Competition Application Submission Guide</Title>
          <Body>Each team has to fill <StyledLink href="https://docs.google.com/forms/d/1qDiGkUOfxa4JaC_3H_05OUiLizKTFy5kqQXxr6NfD6U/edit">this survey</StyledLink> in order to submit their documents. Please refer to the rulebook documentation section for further information.</Body>
          <Body>The rulebook outlines all the rules and requirements for all teams participating in the in-person event. </Body>
          <Body>The Rulebook is subject to change at any time, participating teams will be notified if any changes occur throughout the application stage and during the in-person event. All submissions, including the White Paper and Final Design Package, for the 2022 CHC Competition should abide to all the rules and terms listed in the 2022 CHC Competition Rulebook. CHC reserves the right to reject teams who do not meet the requirements as listed. </Body>
          <Title>Track Demonstration</Title>
          <Body>
          The Track Demonstration is intended for teams who will have their entire hyperloop pod ready prior to the 2022 CHC competition date to demonstrate the full operations of the pod on our test track. Teams who will compete in the Track Demonstration will be required to transport their pod to the Waterloo test track site and perform a test prior to the in-person event. Teams participating in the Track Demonstration will be automatically considered for the 2022 CHC competition awards by submitting the Final Design Package. Below are the documents required and deadlines to apply for the Track Demonstration.
          </Body>
          <table>
            <tbody>
              <tr>
                <DateCell>January 31</DateCell><DashCell/><td><StyledLink href="https://docs.google.com/document/d/1JZqaaBXhBlp4ilnwsGbCr7fBs8HR09XC/edit?usp=sharing&ouid=110858179684358114709&rtpof=true&sd=true">Letter of Intent Deadline</StyledLink></td>
              </tr>
              <tr>
                <DateCell>January 31</DateCell><DashCell/><td><StyledLink href="https://docs.google.com/document/d/1KFdxSfdHW0VUUvsWZSm0LwUaofQowU_VpjHrBWkfuyA/edit?usp=sharing">White Paper Deadline</StyledLink></td>
              </tr>
              <tr>
                <DateCell>February 15</DateCell><DashCell/><td>White Paper Feedback</td>
              </tr>
              <tr>
                <DateCell>March 7</DateCell><DashCell/><td>Final Design Package Deadline</td>
              </tr>
              <tr>
                <DateCell>April 15</DateCell><DashCell/><td>Final Design Package Feedback</td>
              </tr>
              <tr>
                <DateCell>May</DateCell><DashCell/><td>1-on-1 Design Review Meetings</td>
              </tr>
            </tbody>
          </table>
          <Title>Technology Showcase</Title>
          <Body>
            The Technology Showcase is intended for teams who would like to present a sub-system or a specific feature that is a part of the general hyperloop technologies. Teams who participate in this competition are not required to have an entire hyperloop pod built. Participating teams will be required to showcase their technologies or prototypes at the in-person event and are eligible for certain 2022 CHC competition awards. Below are the documents required and deadlines to apply for the Technology Showcase.
          </Body>
          <table>
            <tbody>
              <tr>
                <DateCell>January 31</DateCell><DashCell/><td><StyledLink href ="https://docs.google.com/document/d/1JZqaaBXhBlp4ilnwsGbCr7fBs8HR09XC/edit?usp=sharing&ouid=110858179684358114709&rtpof=true&sd=true">Letter of Intent Deadline</StyledLink></td>
              </tr>
              <tr>
                <DateCell>April 15</DateCell><DashCell/><td>Final Design Package Deadline</td>
              </tr>
              <tr>
                <DateCell>April 30</DateCell><DashCell/><td>Final Design Package Feedback</td>
              </tr>
              <tr>
                <DateCell>May</DateCell><DashCell/><td>1-on-1 Design Review Meetings</td>
              </tr>
            </tbody>
          </table>
          <Title>Awards Summary</Title>
          <Body>
            The following is an overview of what awards may be handed out during competition. All participating teams should familiarize themselves with these. For full details, please refer to the awards document linked at the top of this page.
          </Body>
          <AwardTable>
            <thead>
              <tr>
                <th></th>
                <th>Name of Award</th>
                <th>Summary</th>
                <th>Application Documents</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td 
                  rowSpan={6}
                  style={{
                    backgroundColor: theme.palette.greys[4],
                    verticalAlign: 'top',
                    fontWeight: 'bold',
                    paddingTop: '2px',
                    borderLeft: `2px solid ${theme.palette.greys[4]}`
                  }}>Pod Showcase Awards</td>
                <td>High Power Award</td>
                <td>Recognizes outstanding battery and ESC design</td>
                <td>Pod Showcase and/or Track Demonstration Registration</td>
              </tr>
              <tr>
                <td>Low Power Award</td>
                <td>Recognizes the best low power system component (hardware, firmware, or software)</td>
                <td>Pod Showcase and/or Track Demonstration Registration</td>
              </tr>
              <tr>
                <td>Mechanical Award</td>
                <td>Recognizes the best mechanical design and manufacturing of mechanical parts</td>
                <td>Pod Showcase and/or Track Demonstration Registration</td>
              </tr>
              <tr>
                <td>Areoshell Award</td>
                <td>Recognizes outstanding design, analysis, and construction of hyperloop areoshell.</td>
                <td>Pod Showcase and/or Track Demonstration Registration</td>
              </tr>
              <tr>
                <td>Propulsion and Levitation Award</td>
                <td>Recognizes outstanding gearbox or levitation design</td>
                <td>Pod Showcase and/or Track Demonstration Registration</td>
              </tr>
              <tr>
                <td>Best Pod Award</td>
                <td>Recognizes best overall pod</td>
                <td>Pod Showcase <strong>and</strong> Track Demonstration Registration</td>
              </tr>
              <tr>
                <td 
                  rowSpan={2}
                  style={{
                    backgroundColor: theme.palette.greys[4],
                    verticalAlign: 'top',
                    fontWeight: 'bold',
                    paddingTop: '2px',
                    borderLeft: `2px solid ${theme.palette.greys[4]}`,
                  }}>Non-Technical Awards</td>
                <td>Growth Award</td>
                <td>Recognizes a team that has implemented changes to become a better team</td>
                <td>Additional Application</td>
              </tr>
              <tr>
                <td>Leader Award</td>
                <td>Recognizes a team lead nominated by team members</td>
                <td>Additional Application</td>
              </tr>
            </tbody>
          </AwardTable>
        </Section>
      </PageContainer>
    </div>
  )
}

export default Competition;
