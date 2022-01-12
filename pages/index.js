import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Head from "next/head";

const Page = () => {
  return (
    <Container>
      <Head>
        <title>Home - DuckWare</title>
      </Head>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello I&apos;m a hardware enthusiast / game dev
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            DuckWare
          </Heading>
          <p>Physics Man(GameDev / Hardware / Programmer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={4}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/cool-duck.jpg"
            alt="pfp"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hey there! i&apos;m Duk(chandu lanka) a highschooler (programmer /
          game dev / hardware enthusiast)! I work for{" "}
          <NextLink href="">
            <Link href="https://beantoo.studio/" target="_blank">
              BeanToo Studios
            </Link>
          </NextLink>{" "}
          which is an indie game dev studio which makes 2d pixel art games. I
          work there as a full-time developer working on the companies games and
          technologies such as Lucid Engine which is a custom game engine we are
          developing in C++, Carrot Guns... An RPG rougelike shooter game about
          bunnies... and alot more! I also have many projects of my own such as{" "}
          <NextLink href="">
            <Link href="https://github.com/lovframe/lovframe" target="_blank">
              lovframe
            </Link>
          </NextLink>
          , A Game Engine I will be using for my personal projects, Frocto my
          very own video game I am developing in lua, and{" "}
          <NextLink href="">
            <Link href="https://github.com/chandu-lanka/x-lang" target="_blank">
              X-Lang
            </Link>
          </NextLink>
          , a programming language which is being written in python
        </Paragraph>
        <Box display="flex" alignItems="center" justifyContent="space-around">
          <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Projects
              </Button>
            </NextLink>
          </Box>

          <Box align="center" my={4}>
            <NextLink href="/bio">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Bio
              </Button>
            </NextLink>
          </Box>

          <Box align="center" my={4}>
            <NextLink href="/blog">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
                Blog
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};

export default Page;
