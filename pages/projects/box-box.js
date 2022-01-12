import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Head from "next/head";

const Work = () => {
  return (
    <Container>
      <Head>
        <title>Box Box - Scoop</title>
      </Head>
      <Title>
        Box Box<Badge mx="2px">2021</Badge>
      </Title>
      <P>A Two Player Puzzle Sokoban Type Game Made in 3 Days</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://scoopydevy.itch.io/box-box" target="_blank">
            boxbox.com
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platforms</Meta>
          <span>Windows / Mac / Linux</span>
        </ListItem>

        <ListItem>
          <Meta>Tools</Meta>
          <span>Aseprite / Godot / SFXR</span>
        </ListItem>

        <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.youtube.com/watch?v=ilSIZjYVmsE">
            Youtube <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Socials</Meta>
          <Link href="https://discord.gg/d3YPb5Er59" target="_blank">
            Discord <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/Box Box.png" alt="Box Box" />

      <WorkImage src="/images/projects/boxbox/boxbox_1.png" alt="Box Box" />

      <WorkImage src="/images/projects/boxbox/boxbox_2.png" alt="Box Box" />
    </Container>
  );
};

export default Work;
