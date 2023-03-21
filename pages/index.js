import Head from "next/head";
import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";
import { getFeaturedPosts } from "../helpers/postsUtil";

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Welcome to my blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};

export default HomePage;
