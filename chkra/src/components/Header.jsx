import { Flex, Button, Stack, Heading, Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box
      h="40vh"
      bg="gray"
      background="url('/siluetachicadeportiva.png')"
      backgroundRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        alignItems="Center"
        direction="column"
        justify="center"
        h="100%"
        bg="rgb(0 0 0 / 60%)"
        p={["0 10%", null, "0 20%"]}
      >
        <Heading
          color="white"
          letterSpacing="5px"
          textTransform="uppercase"
          fontWeight="light"
          textAlign="center"
        >
          DOMINA EL TERRENO
        </Heading>

        <Stack
          spacing="40px"
          mt="30px"
          direction={{ base: "column", md: "row" }}
          w={["100%", null, "auto"]}
        >
          <Button
            variant="outline"
            fontWeight="light"
            borderRadius="0"
            borderColor="white"
            color={"white"}
            letterSpacing="1px"
            _hover={{ bg: "white", color: "black" }}
            width={{ base: "100%", md: "auto" }}
            maxW={{ base: "100%", md: "300px" }}
          >
            VER DETALLES
          </Button>

          <Button
            variant="outline"
            fontWeight="light"
            borderRadius="0"
            borderColor={"white"}
            color={"white"}
            letterSpacing="1px"
            _hover={{ bg: "white", color: "black" }}
            width={{ base: "100%", md: "auto" }}
            maxW={{ base: "100%", md: "300px" }}
          >
            VER VIDEO
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}