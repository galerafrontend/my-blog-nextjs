import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";
import { useSpinner } from "../components/ui/useSpinner";
import LoadingSpinner from "../components/ui/LoadingSpinner";

const ContactPage = () => {
  const spinner = useSpinner();

  if (spinner) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="Send me your message!" />
      </Head>
      <ContactForm />;
    </>
  );
};

export default ContactPage;
