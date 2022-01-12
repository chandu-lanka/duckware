import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Head from "next/head";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import HallowEngineImg from "../public/images/projects/Hallow Engine.png";
import BananaMan from "../public/images/projects/BananaMan.png";
import BoxBox from "../public/images/projects/Box Box.png";
import pyEngine from "../public/images/projects/pyEngine.png";
import SpeedRunningCat from "../public/images/projects/SpeedRunningCat.png";
import XLang from "../public/images/projects/X-Lang.png";

const Works = () => (
  <Container>
    <Head>
      <title>Projects - DuckWare</title>
    </Head>
    <Heading as="h3" fontSize={20} mb={4}>
      Projects
    </Heading>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.1}>
        <WorkGridItem
          id="x-lang"
          thumbnail={XLang}
          title="X - Programming Language"
        >
          A Beautiful Programming Language Which is A Hybrid Of C++ and Python
        </WorkGridItem>
      </Section>

      <Section delay={0.1}>
        <WorkGridItem id="box-box" title="Box Box" thumbnail={BoxBox}>
          A Two Player Puzzle Sokoban Type Game Made in 3 Days
        </WorkGridItem>
      </Section>

      <Section>
        <WorkGridItem id="bananaman" title="Banana Man" thumbnail={BananaMan}>
          A Super Hard Rage Game Made in 1 Week
        </WorkGridItem>
      </Section>

      <Section delay={0.1}>
        <WorkGridItem id="py-engine" thumbnail={pyEngine} title="Py Engine">
          A Python/Pygame Game Framework for game creation
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <Section delay={0.2}>
      <Divider my={6} />

      <Heading as="h3" fontSize={20} mb={4}>
        Collaborations
      </Heading>
    </Section>

    <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section delay={0.3}>
        <WorkGridItem
          id="speed-running-cat"
          thumbnail={SpeedRunningCat}
          title="Speed Running Cat"
        >
          A Game made in 48 Hours For A Game Jam
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <Section delay={0.4}>
      <Divider my={6} />
    </Section>
  </Container>
);

export default Works;
