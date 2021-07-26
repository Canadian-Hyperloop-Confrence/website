import styled from 'styled-components';
import Typography from './Typography';


const DateText = styled(Typography).attrs({
  variant: 'title'
})`
  ::before {
    content: url('/calendar.svg');
    padding-right: 12px;
    padding-top: 4px;
  }

`;

const BlogImage = styled.img``;

const TextContainer = styled.div`
  padding-left: 36px;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  border: 3px solid ${({ theme }): string => theme.palette.chcBlackA};
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
`;

type BlogCardComponent = (props: BlogCardData) => React.ReactNode

const BlogCard: BlogCardComponent = ({ title, imageSrc, date, link }) => {

  const handleGoToBlog = () => {
    window.open(link)
  }

  return (
    <Card onClick={handleGoToBlog}>
      <BlogImage src={imageSrc} />
      <TextContainer>
        <Typography variant="title">{title}</Typography>
        <DateText>{date.month > 9 ? date.month : `0${date.month}`}/{date.day > 9 ? date.day : `0${date.day}` }/{date.year}</DateText>
      </TextContainer>
    </Card>
  )
}

export default BlogCard;
