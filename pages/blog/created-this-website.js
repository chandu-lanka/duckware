import { Container, Heading, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Author from "../../components/author";
import P from "../../components/paragraph";

const CreatedThisWebsite = () => {
  return (
    <Container>
      <Head>
        <title>Making This Website - The Process - Scoop</title>
      </Head>
      <Heading as="h2" mt={2}>
        Created This Website
      </Heading>
      <Author date="9th November, 2021" />

      <P>
        So i&apos;ve made so many websites such as alot of portfolios in the
        past but this one is special to me because I always wanted a long
        lasting one! Now you might be wondering.. But you said you made many
        portfolios in the past then how is this one so special? Well thats where
        I tell you that those portfolios were none of my liking so I designed
        this website for about a week before cutting a pasting random slices of
        code to see what they did
      </P>

      <Divider my={6} />

      <P>
        Now lets get into the meat and potatos of this blog post! So I decided
        to use React.js which is a well know javascript web development
        framework, Next.js which is yet another well know{" "}
        <i>Static Site Generator</i>, and Chakra-UI which is a ui library which
        is much more clean and intuitive then basic css or scss. I will go
        in-detail on what I did in the next paragraph.
      </P>

      <Divider my={6} />

      <P>
        So I first installed alot of the modules I needed with npm install react
        next @chakra-ui/react @chakra-ui/icons @emotion/styled framer-motion
        after that I started to work on the home page ofc using my designs as a
        reference. I then made the projects page which took me about a week or
        so because of school. I then created a light/dark theme changer which
        was super simple with chakra. I also added a hamburger menu and worked
        on different port sizes so that the website looks good on all platforms
        i.e. Phones, Tablets, Laptops, PC&apos;s, etc. Then I went and worked on
        the blog page and created a few components for intuitivity. And there
        you go... WEBSITE😎
      </P>
    </Container>
  );
};

export default CreatedThisWebsite;
