import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GiConversation } from "react-icons/gi";
import Conversation from "../components/Conversation";
import MessageContainer from "../components/MessageContainer";
import { useState } from "react";

export default function ChatPage() {
  const [selectConversation, setSelectConversation] = useState(true);
  return (
    <Box
      position={"absolute"}
      left={"50%"}
      transform={"translate(-50%)"}
      width={{
        base: "100%",
        md: "80%",
        lg: "750px",
      }}
      p={4}
    >
      <Flex
        gap={4}
        flexDirection={{
          base: "column",
          md: "row",
        }}
        maxW={{
          sm: "400px",
          md: "full",
        }}
        mx={"auto"}
      >
        <Flex
          flex={30}
          gap={2}
          flexDirection={"column"}
          maxW={{
            sm: "250px",
            md: "full",
          }}
          mx={"auto"}
        >
          <Text
            fontWeight={700}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            Conversation
          </Text>
          <form>
            <Flex alignItems={"center"} gap={3}>
              <Input placeholder="Search for a user" />
              <Button size={"sm"}>
                <SearchIcon />
              </Button>
            </Flex>
          </form>

          {true &&
            [0, 1, 2, 3, 4].map((_, i) => (
              <Flex
                key={i}
                gap={4}
                alignItems={"center"}
                p={"1"}
                borderRadius={"md"}
              >
                <Box>
                  <SkeletonCircle size={"10"} />
                </Box>
                <Flex w={"full"} flexDirection={"column"} gap={3}>
                  <Skeleton h={"10px"} w={"80px"} />
                  <Skeleton h={"8px"} w={"90%"} />
                </Flex>
              </Flex>
            ))}
          <Conversation />
          <Conversation />
          <Conversation />
        </Flex>
        {!selectConversation && (
          <Flex
            flex={70}
            borderRadius={"md"}
            p={2}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"400px"}
          >
            <GiConversation size={100} />
            <Text fontSize={20}>MessageContainer</Text>
          </Flex>
        )}
        {selectConversation && <MessageContainer />}
      </Flex>
    </Box>
  );
}
