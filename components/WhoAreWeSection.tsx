import React, { useMemo, useState } from 'react';
import UTypography from "./Typography";
import styled from 'styled-components';

const Typography = styled(UTypography)``;

const OurVision = () => (
  <>
    <Typography variant="title">Our Vision</Typography>
    <Typography variant="body">Hyperloop has the potential to enable the highest speed passenger transportation while simultaneously achieving the highest per-passenger-km efficiency. Hyperloop technologies promise a sustainable, economical, and reliable mode of transportation, and the goal of the CHC is to enable this future to happen, especially in Canada. We aspire to inspire Hyperloop innovation, realization, and deployment, and thereby **accelerate the sustainable future of transportation.</Typography>
  </>
);

const StyledList = styled.ul`
  color: ${({ theme }): string => theme.palette.whiteA};
`;

const OurMission = () => (
  <>
    <Typography variant="title">Our Mission</Typography>
    <Typography variant="body">The annual Canadian Hyperloop Conference is dedicated to developing the technologies and policies required for a fully functioning Hyperloop pod and track, by:</Typography>
    <StyledList>
      <li><Typography variant="body">Encouraging the development and concrete demonstration of Hyperloop technology by challenging student teams in an annual pod demo - the Canadian Hyperloop Competition.</Typography></li>
      <li><Typography variant="body">Developing a sense of community by hosting knowledge sharing events, research and industry speakers, and a social media presence appealing to the general public.</Typography></li>
      <li><Typography variant="body">Building industry and government support through partnerships to ensure we are aligned with the growth of the global Hyperloop community and technology.</Typography></li>
    </StyledList>
  </>
);

const OurValues = () => (
  <>
    <Typography variant="title">Our Values</Typography>
    <Typography variant="body">CANADIAN: CHC is a Canadian organization for Canadian Hyperloop sphere, with an emphasis on involvement of university design teams.</Typography>
    <Typography variant="body">DIALOGUE: CHC offers a platform for founding university teams, future member university teams, Canadian Hyperloop sphere, international hyperloop efforts, and general audience to connect and create meaningful interactions to improve hyperloop technology.</Typography>
    <Typography variant="body">EQUALITY + EMPOWERMENT: CHC is an organization that promotes to showcase work from all levels of experience. From new teams to teams with multiple competition experience, CHC aims to address the knowledge gap and provide an open platform for teams to improve themselves.</Typography>
    <Typography variant="body">INNOVATION: CHC will initiate interest and development in previously unexplored areas related to hyperloop. CHC members will have a platform to cultivate dialogue between member schools, and tangible means to support ideas through awards, etc.</Typography>
  </>
);

const LeftSide = styled.div``;
const RightSide = styled.div``;
const Container = styled.div`
  display: flex;
  ${LeftSide} {
    width: 33%;
    border-right: 4px solid ${({ theme }): string => theme.palette.whiteA};
    margin-right: 16px;
    padding-right: 16px;
  }
  ${RightSide} {
    width: 66%;
  }
`;

const ButtonContainer = styled.div`
  background-color: ${({ theme }): string => theme.palette.whiteA};
  height: 50px;
  width: 200px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;
  h1 {
    color: ${({ theme }): string => theme.palette.charcoalA};
  }
`;
const Button = ({onClick, children}: { onClick: () => void, children: React.ReactNode }) => (
  <ButtonContainer onClick={onClick}>
    <h1>{children}</h1>
  </ButtonContainer>
)

const WhoAreWeSection = () => {
  const [activeSection, setActiveSection] = useState<'mission' | 'vision' | 'values'>('mission');
  const ActiveSection = useMemo(() => {
    switch(activeSection) {
      case 'mission':
        return OurMission;
      case 'values':
        return OurValues;
      case 'vision':
        return OurVision;
    }
  }, [activeSection]);
  return (
    <Container>
      <LeftSide>
        <Typography variant="title">Who are we?</Typography>
        <Button onClick={() => setActiveSection('mission')}>Mission</Button>
        <Button onClick={() => setActiveSection('vision')}>Vision</Button>
        <Button onClick={() => setActiveSection('values')}>Values</Button>
      </LeftSide>
      <RightSide>
        <ActiveSection />
      </RightSide>
    </Container>
  )
}

export default WhoAreWeSection;
