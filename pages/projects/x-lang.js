import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Head from "next/head";

const Work = () => {
  return (
    <Container>
      <Head>
        <title>X Programming Language - Scoop</title>
      </Head>
      <Title>
        X Programming Language<Badge mx="2px">2021</Badge>
      </Title>
      <P>
        A Beautiful Programming Language Which is A Hybrid Of C++ and Python
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/scoopydevy/x-lang" target="_blank">
            x-lang.org
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platforms</Meta>
          <span>Windows / Mac / Linux</span>
        </ListItem>

        <ListItem>
          <Meta>Tools</Meta>
          <span>Bare Bone Python</span>
        </ListItem>

        <ListItem>
          <Meta>Socials</Meta>
          <Link href="https://discord.gg/d3YPb5Er59" target="_blank">
            Discord <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/X-Lang.png" alt="X Language" />
    </Container>
  );
};

export default Work;
