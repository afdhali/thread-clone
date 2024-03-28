import {
  Avatar,
  Flex,
  Image,
  Text,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

export default function PostPage() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
        </Flex>
      </Flex>
      <Text my={3}>Lets Talk about Threads</Text>
      <Box
        borderRadius={"6px"}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)}
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="Looks Really good"
        createdAt="2d"
        likes={100}
        username="Dan Abrahmov"
        userAvatar="https://bit.ly/dan-abramov"
      />
      <Comment
        comment="Best For you"
        createdAt="3d"
        likes={15}
        username="Kola Tioluwani"
        userAvatar="https://bit.ly/tioluwani-kolawole"
      />
      <Comment
        comment="This is a bad things"
        createdAt="1w"
        likes={1}
        username="Kent Dodds"
        userAvatar="https://bit.ly/kent-c-dodds"
      />
    </>
  );
}
