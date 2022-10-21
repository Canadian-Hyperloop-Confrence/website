import { ReactNode } from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
  font: ${({ theme }): string => theme.typography.heading};
`;

const SubHeading = styled.h4`
  font: ${({ theme }): string => theme.typography.subHeading};
`;


const Title = styled.h1`
  font: ${({ theme }): string => theme.typography.title};
`;

const SubTitle = styled.h2`
  font: ${({ theme }): string => theme.typography.subTitle};
`;

const Body = styled.p`
  font: ${({ theme }): string => theme.typography.body};
`;


const Caption = styled.p`
  font: ${({ theme }): string => theme.typography.caption};
`;

const Button = styled.p`
  font: ${({ theme }): string => theme.typography.button};
`;


interface Props {
  variant: 'body' | 'heading' | 'title' | 'subTitle' | 'subHeading' | 'button' | 'caption';
  children: ReactNode;
  className?: string;
  color?: 'red' | 'black';
}

const Typography: React.FC<Props> = ({ variant, children, className, color='black' }) => {
  switch (variant) {
    case 'title':     return <Title className={`typography-${color} ${className} typography`}>{children}</Title>;
    case 'subTitle':     return <SubTitle className={`typography-${color} ${className} typography`}>{children}</SubTitle>;
    case 'heading':    return <Heading className={`typography-${color} ${className} typography`}>{children}</Heading>;
    case 'subHeading':    return <SubHeading className={`typography-${color} ${className} typography`}>{children}</SubHeading>;
    case 'body':      return <Body className={`typography-${color} ${className} typography`}>{children}</Body>;
    case 'caption':  return <Caption className={`typography-${color} ${className} typography`}>{children}</Caption>;
    case 'button':  return <Button className={`typography-${color} ${className} typography`}>{children}</Button>;
  }
}

export default styled(Typography)``;
