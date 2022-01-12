import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Divider, GridItem } from "@chakra-ui/layout";
import { BlogGridItem } from "../components/grid-item";
import Head from "next/head";
import Section from "../components/section";

const Blog = () => {
  return (
    <Container>
      <Head>
        <title>Blog Posts - Scoop</title>
      </Head>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Blog Posts
        </Heading>
      </Container>

      <Divider my={6} />

      <Section delay={0.1}>
        <SimpleGrid column={[1, 1, 1]} gap={6}>
          <GridItem>
            <BlogGridItem
              id="created-this-website"
              title="Created This Website"
              author="Chandu Lanka(Duk)"
            >
              So i&apos;ve made so many websites in the past but this one is
              special to me because...
            </BlogGridItem>
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Blog;
