import { Box, VStack, Flex, Avatar, Text } from "@chakra-ui/react";

export default function UserHeader() {
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"}>Mark Zuckerberg</Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>markzuckerberg</Text>
            <Text fontSize={"x-small"} bg={"gray.dark"} color={"gray.light"}>
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Mark Zuckerberg" src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>
    </VStack>
  );
}
