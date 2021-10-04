import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import Typography from './Typography';


const DateText = styled(Typography).attrs({
  variant: 'title'
})<{ invertColour: boolean }>`
  ::before {
    content: url('/calendar.svg');
    padding-right: 12px;
    padding-top: 4px;

    ${({ invertColour }): string | FlattenSimpleInterpolation => invertColour ? css`filter: invert(1)` : ''};
  }

`;

const BlogImage = styled.img``;

const TextContainer = styled.div`
  padding-left: 36px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div<{invertBorder: boolean }>`
  border: 3px solid ${({ theme, invertBorder }): string => invertBorder ? theme.palette.chcWhite : theme.palette.chcBlackA };
  border-radius: 10px;
  max-width: 743px;
  display: flex;

  cursor: pointer;

  ${BlogImage} {
    width: 33%;
    border-radius: 5px;
  }

  ${TextContainer} {
    width: 66%;
  }

  @media screen and (max-width: ${({ theme }): string => theme.breakPoints.desktop}) {
    flex-direction: column;

    ${BlogImage} {
      width: 100%;
    }
  }
`;

type BlogCardComponent = (props: BlogCardData & { className?: string; darkBackground?: boolean }) => React.ReactElement

const BlogCard: BlogCardComponent = ({ title, imageSrc, date, link, className, darkBackground=false }) => {

  const handleGoToBlog = () => {
    window.open(link)
  }

  return (
    <Card onClick={handleGoToBlog} className={className} invertBorder={darkBackground}>
      <BlogImage src={imageSrc} />
      <TextContainer>
        <Typography variant="title">{title}</Typography>
        <DateText invertColour={darkBackground}>{date.month > 9 ? date.month : `0${date.month}`}/{date.day > 9 ? date.day : `0${date.day}` }/{date.year}</DateText>
      </TextContainer>
    </Card>
  )
}

export default BlogCard;
