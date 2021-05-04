import styled from 'styled-components';

const FooterContainer = styled.div`
  font: ${({ theme }) => theme.typography.body.regular};
  color: ${({ theme }) => theme.palette.greys[2]};
`;

const Footer = ({ className }: { className?: string }) => <FooterContainer className={className}>Canadian Hyperloop Conference	&#169; 2021</FooterContainer>

export default Footer;
