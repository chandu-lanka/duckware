import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Head from "next/head";

const Work = () => {
  return (
    <Container>
      <Head>
        <title>Banana Man - Scoop</title>
      </Head>
      <Title>
        Banana Man<Badge mx="2px">2021</Badge>
      </Title>
      <P>A Super Hard Rage Game Made in 1 Week</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://scoopydevy.itch.io/bananaman" target="_blank">
            Banana Man
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platforms</Meta>
          <span>Windows / Mac / Linux</span>
        </ListItem>

        <ListItem>
          <Meta>Tools</Meta>
          <span>Godot / Aseprite / SFXR</span>
        </ListItem>

        <ListItem>
          <Meta>Socials</Meta>
          <Link href="https://discord.gg/d3YPb5Er59" target="_blank">
            Discord <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/BananaMan.png" alt="Banana Man" />
    </Container>
  );
};

export default Work;
