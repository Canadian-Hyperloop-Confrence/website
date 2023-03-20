import { ReactNode } from 'react';
import styled from 'styled-components';

const Heading = styled.h3`
  font: ${({ theme }): string => theme.typography.heading1};
`;

const SubHeading = styled.h4`
  font: ${({ theme }): string => theme.typography.heading2};
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
  variant: 'body' | 'heading1' | 'title' | 'subTitle' | 'heading2' | 'button' | 'caption';
  children: ReactNode;
  className?: string;
  color?: 'red' | 'black';
}

const Typography: React.FC<Props> = ({ variant, children, className, color='black' }) => {
  switch (variant) {
    case 'title':     return <Title className={`typography-${color} ${className} typography`}>{children}</Title>;
    case 'subTitle':     return <SubTitle className={`typography-${color} ${className} typography`}>{children}</SubTitle>;
    case 'heading1':    return <Heading className={`typography-${color} ${className} typography`}>{children}</Heading>;
    case 'heading2':    return <SubHeading className={`typography-${color} ${className} typography`}>{children}</SubHeading>;
    case 'body':      return <Body className={`typography-${color} ${className} typography`}>{children}</Body>;
    case 'caption':  return <Caption className={`typography-${color} ${className} typography`}>{children}</Caption>;
    case 'button':  return <Button className={`typography-${color} ${className} typography`}>{children}</Button>;
  }
}

export default styled(Typography)``;
