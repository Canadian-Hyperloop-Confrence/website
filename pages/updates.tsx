import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import UBlogCard from '../components/BlogCard';
import Blogs from '../data/Blogs';
import Videos from '../data/Videos';
import HyperloopNews from '../data/HyperloopNews';

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

const byDate = (b: BlogCardData, a: BlogCardData): number => a.date.year - b.date.year !== 0
  ? a.date.year - b.date.year
  : a.date.month - b.date.month !== 0
    ? a.date.month - b.date.month
    : a.date.day - b.date.day;

const Updates = () => {
  const renderBlogCards = Blogs
    .sort(byDate)
    .map((blog) => <BlogCard key={blog.title} {...blog}/> );
  const renderVideoCards = Videos
    .sort(byDate)
    .map((video) => <BlogCard darkBackground key={video.title} {...video} />);
  const renderHyperloopNewsCards = HyperloopNews
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
