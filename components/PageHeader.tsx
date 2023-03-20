import { FC } from 'react';
import styled from 'styled-components';

const Heading = styled.div`
  font: ${({ theme }) => theme.typography.heading1};
  color: ${({ theme }) => theme.palette.charcoalA};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

interface Props {
  className?: string;
}

const PageHeader: FC<Props> = ({
  className,
}) => {

  return(
    <Container className={className}>
      <img src="/chc-logo.svg" />
      <Heading>Canadian Hyperloop Conference</Heading>
    </Container>
  )
}

export default PageHeader;
