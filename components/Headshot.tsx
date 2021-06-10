import { ReactElement } from "react";
import styled from 'styled-components';

const Container = styled.div`
  width: 260px;
  height: 255px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Picture = styled.img`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.h1`
  margin: 0;
  padding: 0;
  font: 600 20px Montserrat;
`;

const Position = styled.h2`
  margin: 0;
  padding: 0;
  font: 400 20px Questrial;
`;

const HeadShot = ({ name, position, img }: TeamMemberHeadshot): ReactElement  => {
  return (
    <Container>
      <Picture src={img} alt={`${position}-${name}`}/>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Container>
  );
};

export default styled(HeadShot)``;
