import PostItem from "../PostItem";
import classes from "./styles.module.css";

const PostsList = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem
          key={post.slug}
          title={post.title}
          slug={post.slug}
          image={post.image}
          excerpt={post.excerpt}
          date={post.date}
        />
      ))}
    </ul>
  );
};

export default PostsList;
