import React from 'react';
import styled from 'styled-components';

const OuterSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${({ theme }): string => theme.breakPoints.desktop}) {
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
  }
`;

const InnerSection = styled.div`
  padding-top: 80px;
  padding-bottom: 80px;
  max-width: 856px;
  display: flex;
  justify-content: start;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;

  .typography:not(::last-child) {
    width: 100%;
    padding-bottom: 26px;
  }
`;

interface Props {
  className?: string;
}

const Section: React.FC<Props> = ({ children, className }) => (
  <OuterSection className={`${className} section`}>
    <InnerSection>
      {children}
    </InnerSection>
  </OuterSection>
);

export default styled(Section)``;
