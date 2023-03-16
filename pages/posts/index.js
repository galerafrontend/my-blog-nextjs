import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../helpers/postsUtil";

const AllPostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />;
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
