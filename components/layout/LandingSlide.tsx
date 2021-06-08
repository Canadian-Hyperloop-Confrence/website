import { ReactNode } from 'react';
import styled from 'styled-components';

const Outer = styled.div`
  width: 100%;
  display: flex;
  /* height: calc(100vh - ${({ theme }): string => theme.constants.navbarHeight}); */
  height: 515px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }):string => theme.palette.chcBlackA};
`;

const LandingSlide = styled.div`
  width: 865px;
  .typography {
    color: ${({ theme }): string => theme.palette.chcWhite};
    margin: 0;
  }
  @media screen and (max-width: ${({ theme }): string => theme.breakPoints.desktop}) {
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
  }
`;

interface Props {
  className?: string;
  children: ReactNode;
}

const LandingSlideComponent = ({className, children}: Props) => (
  <Outer className={className}>
    <LandingSlide>
      {children}
    </LandingSlide>
  </Outer>
);


export default LandingSlideComponent;
