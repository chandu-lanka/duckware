import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Head from "next/head";

const Work = () => {
  return (
    <Container>
      <Head>
        <title>Speed Running Cat - Scoop</title>
      </Head>
      <Title>
        Box Box<Badge mx="2px">2021</Badge>
      </Title>
      <P>A Two Player Puzzle Sokoban Type Game Made in 3 Days</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://scoopydevy.itch.io/the-speedrunning-cat"
            target="_blank"
          >
            The Speed Running Cat
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
          <Meta>Socials</Meta>
          <Link href="https://discord.gg/d3YPb5Er59" target="_blank">
            Discord <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/SpeedRunningCat.png"
        alt="The Speed Running Cat"
      />
    </Container>
  );
};

export default Work;
