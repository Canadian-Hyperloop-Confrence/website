import styled from 'styled-components';
import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const JumpToText = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 32px;
  letter-spacing: 0.05em;
  text-align: justified;
  color: ${({ theme }): string => theme.palette.chcRed};
`;

const Sections = styled.div`
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop }) {
    justify-content: space-between;
    flex-direction: row;
    a:not(:first-child) {
      padding-top: 0px;
      padding-left: 8px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakPoints.desktop }) {
    flex-direction: column;
    a:not(:first-child) {
      padding-left: 0px;
      padding-top: 8px;
    }
  }
`;

interface Props {
  sections: Array<{
    name: string;
    link: string;
  }>
}

const JumpTo = ({ sections }: Props) => (
  <Container>
    <JumpToText>Jump to:</JumpToText>
    <Sections>
      {sections.map(({ name, link }) => <a href={link}><Button variant='Primary'>{name}</Button></a>)}
    </Sections>
  </Container>
);

export default JumpTo;
