import NextLink from "next/link";
import {
  Box,
  Text,
  Container,
  Divider,
  Heading,
  Button,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
	<Container>
      <Heading as="h1">404! Page Not Found</Heading>
      <Text>The Page you are trying to access was not found.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="purple">Return To Home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
