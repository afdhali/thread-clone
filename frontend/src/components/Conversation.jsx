import {
  Avatar,
  AvatarBadge,
  Box,
  Flex,
  Image,
  Stack,
  Text,
  WrapItem,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCheck2All, BsFillImageFill } from "react-icons/bs";

export default function Conversation() {
  const [bg, setBg] = useState(true);
  const [avatar, setAvatar] = useState(true);
  const [lastMsg, setLastMsg] = useState(true);
  const colorMode = useColorMode();
  return (
    <Flex
      gap={4}
      alignItems={"center"}
      p={"1"}
      _hover={{
        cursor: "pointer",
        bg: useColorModeValue("gray.600", "gray.dark"),
        color: "white",
      }}
      bg={bg === true ? (colorMode === "light" ? "gray.400" : "gray.dark") : ""}
      borderRadius={"md"}
    >
      <WrapItem>
        <Avatar
          size={{
            base: "xs",
            sm: "sm",
            md: "md",
          }}
          src="https://bit.ly/dan-abramov"
        >
          {avatar ? <AvatarBadge boxSize="1em" bg="green.500" /> : ""}
        </Avatar>
      </WrapItem>

      <Stack direction={"column"} fontSize={"sm"}>
        <Text fontWeight="700" display={"flex"} alignItems={"center"}>
          Username <Image src="/verified.png" w={4} h={4} ml={1} />
        </Text>
        <Text fontSize={"xs"} display={"flex"} alignItems={"center"} gap={1}>
          {lastMsg ? (
            <Box color={"blue.400"}>
              <BsCheck2All size={16} />
            </Box>
          ) : (
            ""
          )}
          seen Messages <BsFillImageFill size={16} />
        </Text>
      </Stack>
    </Flex>
  );
}
