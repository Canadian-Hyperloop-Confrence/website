import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Image from 'next/image';
import Typography from './Typography';

const Container = styled(Paper)`
  height: 850px;
  width: 315px;
  flex-direction: column;
  display: flex;
`;

const TeamLogo = styled.img`
    height: 105px;
    width: auto;
    align-self: center;
`;

const SectionHeader = styled(Typography).attrs({
  variant: 'subtitle',
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
  overflow-y: scroll;

`;

const VirtualShowcaseTeamCard = ({
  item: {
    category,
    team,
    title,
    summary
  }
}: {
  item: VirtualShowcaseTeamPreview
}): React.ReactElement => {
  return (
    <Container elevation={4}>
      <TeamLogo src={team.logo}/>
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
    </Container>
  )
}

export default VirtualShowcaseTeamCard
