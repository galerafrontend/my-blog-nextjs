import PostsList from "../../posts/PostsList";
import classes from "./styles.module.css";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsList posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
