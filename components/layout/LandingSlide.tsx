import { ReactNode, useMemo } from 'react';
import styled from 'styled-components';

const OuterV1 = styled.div`
  width: 100%;
  display: flex;
  height: 280px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }):string => theme.palette.charcoalA};
`;

const OuterV2 = styled(OuterV1)`
  height: 95vh;
  background-color: ${({ theme }):string => theme.palette.whiteA};
`;

const LandingSlideV1 = styled.div`
  width: 865px;
  .typography {
    color: ${({ theme }): string => theme.palette.whiteA};
    margin: 0;
  }
  @media screen and (max-width: ${({ theme }): string => theme.breakPoints.desktop}) {
    padding-left: 10%;
    padding-right: 10%;
    width: 80%;
  }
`;

const LandingSlideV2 = styled(LandingSlideV1)`
  width: 100%;
  .typography {
    text-align: center;
    color: ${({ theme }): string => theme.palette.charcoalA};
  }
`;

interface Props {
  className?: string;
  children: ReactNode;
  version?: 1 | 2;
}

const LandingSlideComponent = ({className, children, version=1 }: Props) => {
  const [Outer, LandingSlide] = useMemo(() => {
    switch(version) {
      case 1:
        return [OuterV1, LandingSlideV1];
      case 2:
        return [OuterV2, LandingSlideV2];
    }
  }, [version]);
  return (
    <Outer className={className}>
      <LandingSlide>
        {children}
      </LandingSlide>
    </Outer>
  );
};


export default LandingSlideComponent;
