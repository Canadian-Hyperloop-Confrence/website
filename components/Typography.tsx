import { ReactNode } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font: ${({ theme }): string => theme.typography.header.semiBold};
`;

const Title = styled.h1`
  font: ${({ theme }): string => theme.typography.title.semiBold};
`;

const SubTitle = styled.h1`
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 26px;
  letter-spacing: 0.06em;
  text-align: justified;
`;

const Body = styled.p`
  font: ${({ theme }): string => theme.typography.body.regular};
`;

interface Props {
  variant: 'body' | 'header' | 'title' | 'subtitle';
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<Props> = ({ variant, children, className }) => {
  switch (variant) {
    case 'body':      return <Body className={`${className} typography`}>{children}</Body>;
    case 'title':     return <Title className={`${className} typography`}>{children}</Title>;
    case 'header':    return <Header className={`${className} typography`}>{children}</Header>;
    case 'subtitle':  return <SubTitle className={`${className} typography`}>{children}</SubTitle>;
  }
}

export default styled(Typography)``;
