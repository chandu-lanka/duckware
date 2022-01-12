import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          borderRadius="14px"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const BlogGridItem = ({ children, id, title, author }) => (
  <Box w="100%">
    <NextLink href={`/blog/${id}`}>
      <LinkBox cursor="pointer">
        <LinkOverlay href={`/works/${id}`}>
          <Box width="50%" height="30px" align="left">
            <Container height="100%" width="100%">
              <Avatar size="2xs" my={1.5} mx={-3} marginRight={0.5} />{" "}
              <span>{author}</span>
            </Container>
          </Box>
          <Heading mt={2} fontSize={20}>
            {title}
          </Heading>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>

    <Divider my={6} />
  </Box>
);
