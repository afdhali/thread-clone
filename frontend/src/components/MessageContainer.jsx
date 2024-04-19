import {
  Avatar,
  Divider,
  Flex,
  Image,
  Skeleton,
  SkeletonCircle,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

export default function MessageContainer() {
  const [loadingMsg, setLoadingMsg] = useState(true);
  return (
    <Flex
      flex="70"
      bg={useColorModeValue("gray.200", "gray.dark")}
      borderRadius={"md"}
      p={2}
      flexDirection={"column"}
    >
      {/* Message Header */}
      <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
        <Avatar src="https://bit.ly/kent-c-dodds" size={"sm"} />
        <Text display={"flex"} alignItems={"center"}>
          Username <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
      </Flex>

      <Divider />

      <Flex
        flexDir={"column"}
        gap={4}
        my={4}
        p={2}
        height={"400px"}
        overflow={"auto"}
      >
        {!loadingMsg &&
          [...Array(5)].map((_, i) => (
            <Flex
              key={i}
              gap={2}
              alignItems={"center"}
              p={1}
              borderRadius={"md"}
              alignSelf={i % 2 === 0 ? "flex-start" : "flex-end"}
            >
              {i % 2 === 0 && <SkeletonCircle size={7} />}
              <Flex direction={"column"} gap={3}>
                <Skeleton h="8px" w="250px" />
                <Skeleton h="8px" w="250px" />
                <Skeleton h="8px" w="250px" />
              </Flex>
              {i % 2 !== 0 && <SkeletonCircle size={7} />}
            </Flex>
          ))}

        {loadingMsg && (
          <Flex direction={"column"}>
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
            <Message ownMessage={true} />
            <Message ownMessage={false} />
          </Flex>
        )}
      </Flex>

      <MessageInput />
    </Flex>
  );
}
