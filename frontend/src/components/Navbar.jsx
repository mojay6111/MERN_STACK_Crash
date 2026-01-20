import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Container maxW="1140px">
      <Flex
        h={16}
        alignment={"center"}
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontSizeWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bigGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
        >
          <Link to={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button leftIcon={<PlusSquareIcon />}>Create</Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
