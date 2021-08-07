import styled from 'styled-components';
import Head from "next/head";
import Footer from "../components/Footer";
import { LandingSlide, PageContainer, Section as USection } from "../components/layout";
import NavBar from "../components/NavBar";
import Typography from "../components/Typography";
import UBlogCard from '../components/BlogCard';
import Blogs from '../data/Blogs';

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

const Updates = () => {
  const renderBlogCards = Blogs.map((blog) => <BlogCard {...blog}/> );
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
        <Footer />
      </PageContainer>
    </div>
  );
};

export default Updates;
