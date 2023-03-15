import FeaturedPosts from "../components/homepage/FeaturedPosts";
import Hero from "../components/homepage/Hero";
import { DUMMYDATA } from "../dummyData";

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMYDATA} />
    </>
  );
};

export default HomePage;
