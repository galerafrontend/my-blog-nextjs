import PostsList from "../PostsList";
import classes from "./styles.module.css";

const AllPosts = ({ posts }) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsList posts={posts} />
    </section>
  );
};

export default AllPosts;
