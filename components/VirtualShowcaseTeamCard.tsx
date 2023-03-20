import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import Typography from './Typography';
import UnstyledButton from './Button';
import Link from 'next/link';

const Button = styled(UnstyledButton)`
  align-self: center;
  position: absolute;
  bottom: 70px;
`;

const Container = styled(Paper)`
  height: 850px;
  width: 315px;
  flex-direction: column;
  display: flex;
  padding-left: 8px;
  background-color: ${({ theme }): string => theme.palette.whiteA}
`;

const TeamLogo = styled.img`
    margin-top: 16px;
    max-height: 105px;
    max-width: 275px;
    align-self: center;
`;
const TeamLogoContainer = styled.div`
  height: 115px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionHeader = styled(Typography).attrs({
  variant: 'heading2',
  color: 'red'
})``;

const SectionContent = styled(Typography).attrs({
  variant: 'body'
})``;

const InlineSection = styled.div`
  display: inline;
  width: 100%;
  align-self: flex-start;
`;

const ScrollableSection= styled(InlineSection)`
  overflow-y: auto;
  margin-bottom: 100px;

`;

const VirtualShowcaseTeamCard = ({
  item: {
    category,
    team,
    title,
    summary,
    presentationLink
  }
}: {
  item: VirtualShowcaseTeamPreview
}): React.ReactElement => {
  return (
    <Container elevation={4}>
      <TeamLogoContainer><TeamLogo src={team.logo}/></TeamLogoContainer>
      <InlineSection>
        <SectionHeader>Team name:</SectionHeader>
        <SectionContent>{team.name}{team.instituiton && ` - ${team.instituiton}`}</SectionContent>
      </InlineSection>
      <InlineSection>
        <SectionHeader>Category:</SectionHeader>
        <SectionContent>{category}</SectionContent>
      </InlineSection>
      <InlineSection>
        <SectionHeader>Title:</SectionHeader>
        <SectionContent>{title}</SectionContent>
      </InlineSection>
      {summary && (
      <>
        <SectionHeader>Summary:</SectionHeader>
        <ScrollableSection>
          <SectionContent>{summary}</SectionContent>
        </ScrollableSection>
      </>
      )}
      <Link href={presentationLink}><Button>View Presenation</Button></Link>
    </Container>
  )
}

export default VirtualShowcaseTeamCard
