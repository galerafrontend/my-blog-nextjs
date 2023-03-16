import PostHeader from "../PostHeader";
import classes from "./styles.module.css";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs1",
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  excerpt: "NextJs is a React framework for production",
  date: "2023-06-20",
  content: "# This is a first post",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_POSTS.title} />
      {DUMMY_POSTS.content}
    </article>
  );
};

export default PostContent;
