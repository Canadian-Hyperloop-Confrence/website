import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import UBlogCard from '../components/BlogCard';
import { GetServerSideProps } from 'next';

const Header = styled(Typography).attrs({
  variant: 'header'
})`
  width: 100%;
  text-align: center;
`;

const Section = styled(USection)`
  min-height: 740px;
`;

const BlogCard = styled(UBlogCard)`
  margin-bottom: 16px;
`;

const byDate = (b: BlogCardData, a: BlogCardData): number => a.datePosted.year - b.datePosted.year !== 0
  ? a.datePosted.year - b.datePosted.year
  : a.datePosted.month - b.datePosted.month !== 0
    ? a.datePosted.month - b.datePosted.month
    : a.datePosted.day - b.datePosted.day;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch('https://portal.cahyperloop.ca/api/posts');
  const posts = await response.json();

  return {
    props: { posts }
  };
}

interface Props {
  posts: BlogCardData[]
}

const Updates = ({ posts }: Props) => {
  const renderBlogCards = posts.filter((post) => post.type === 'medium')
    .sort(byDate)
    .map((blog) => <BlogCard key={blog.title} {...blog}/> );
  const renderVideoCards = posts.filter((post) => post.type === 'video')
    .sort(byDate)
    .map((video) => <BlogCard darkBackground key={video.title} {...video} />);
  const renderHyperloopNewsCards = posts.filter((post) => post.type === 'news')
    .sort(byDate)
    .map((news) => <BlogCard key={news.title} {...news} />);
  return (
    <div>
      <Head>
        <title>Canadian Hyperloop Conference</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar selected="updates"/>
      <PageContainer>
        <LandingSlide>
          <Header>Updates</Header>
        </LandingSlide>
        <Section>
          <Typography variant="title">Blogs</Typography>
          {renderBlogCards}
        </Section>
        <Section>
          <Typography variant="title">Youtube Videos</Typography>
          {renderVideoCards}
        </Section>
        <Section>
          <Typography variant="title">Hyperloop News</Typography>
          {renderHyperloopNewsCards}
        </Section>
        <Footer />
      </PageContainer>
    </div>
  );
};

export default Updates;
