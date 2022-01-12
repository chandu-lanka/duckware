import { Container, Heading, Text, Box, Image } from "@chakra-ui/react";

const Author = ({ date }) => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        marginLeft="-30px"
        padding="10px"
      >
        <Image
          src="/images/scoop.jpg"
          borderRadius="full"
          width="70px"
          marginRight="10px"
          alt="scoop"
        />

        <Box>
          <Heading as="h3" mt={2}>
            By Scoop
          </Heading>
          <Text>{date}</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Author;
