import { ReactNode } from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  font: ${({ theme }): string => theme.typography.header.semiBold};
`;

const Title = styled.h1`
  font: ${({ theme }): string => theme.typography.title.semiBold};
`;

const Body = styled.p`
  font: ${({ theme }): string => theme.typography.body.regular};
`;

interface Props {
  variant: 'body' | 'header' | 'title';
  children: ReactNode;
  className?: string;
}

const Typography: React.FC<Props> = ({ variant, children, className }) => {
  switch (variant) {
    case 'body': return <Body className={`${className} typography`}>{children}</Body>;
    case 'title': return <Title className={`${className} typography`}>{children}</Title>;
    case 'header': return <Header className={`${className} typography`}>{children}</Header>;
  }
}

export default styled(Typography)``;
