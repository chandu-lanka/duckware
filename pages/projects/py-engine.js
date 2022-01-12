import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Paragraph from "../../components/paragraph";
import Head from "next/head";

const Work = () => {
  return (
    <Container>
      <Head>
        <title>Py Engine - Scoop</title>
      </Head>
      <Title>
        Py Engine<Badge mx="2px">2021</Badge>
      </Title>
      <P>A Python/Pygame Game Framework for game creation</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/scoopydevy/pyengine" target="_blank">
            Py Engine
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Platforms</Meta>
          <span>Windows / Mac / Linux</span>
        </ListItem>

        <ListItem>
          <Meta>Tools</Meta>
          <span>Python / Pygame</span>
        </ListItem>

        <ListItem>
          <Meta>Socials</Meta>
          <Link href="https://discord.gg/d3YPb5Er59" target="_blank">
            Discord <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/pyEngine.png" alt="Py Engine" />

      <Divider my={6} />

      <Paragraph>Game Made Using PyEngine</Paragraph>

      <Divider my={6} />

      <WorkImage
        src="/images/projects/pyengine.gif"
        alt="Game Made Using Py Engine"
      />
    </Container>
  );
};

export default Work;
