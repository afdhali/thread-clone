import { Flex, Text, Avatar } from "@chakra-ui/react";

export default function Message({ ownMessage }) {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"} my={2}>
          <Text maxW={"350px"} bg={"blue.400"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            dolores ullam quo. Laborum dicta laudantium, labore officiis aperiam
            inventore atque!
          </Text>
          <Avatar src="https://bit.ly/kent-c-dodds" w="7" h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src="https://bit.ly/ryan-florence" w="7" h={7} />
          <Text maxW={"350px"} bg={"green.500"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            dolores ullam quo. Laborum dicta laudantium, labore officiis aperiam
            inventore atque!
          </Text>
        </Flex>
      )}
    </>
  );
}
