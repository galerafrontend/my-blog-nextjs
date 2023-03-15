import classes from "./styles.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/charles.jpeg"
          alt="Charles Galera"
          height={400}
          width={400}
        />
      </div>
      <h1>Hi, I am Charles</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
