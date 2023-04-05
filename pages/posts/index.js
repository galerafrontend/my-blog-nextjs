import Head from "next/head";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/postsUtil";
import { useSpinner } from "../../components/ui/useSpinner";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

const AllPostsPage = ({ posts }) => {
  const spinner = useSpinner();

  if (spinner) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};

export default AllPostsPage;
