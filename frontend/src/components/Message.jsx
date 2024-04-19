import { Flex, Text, Avatar } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { selectedConversationAtom } from "../atoms/messagesAtom";
import userAtom from "../atoms/userAtom";

export default function Message({ message, ownMessage }) {
  const selectedConversation = useRecoilValue(selectedConversationAtom);
  const user = useRecoilValue(userAtom);
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"} my={2}>
          <Text maxW={"350px"} bg={"blue.400"}>
            {message.text}
          </Text>
          <Avatar src={user.profilePic} w="7" h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src={selectedConversation.userProfilePic} w="7" h={7} />
          <Text maxW={"350px"} bg={"green.500"}>
            {message.text}
          </Text>
        </Flex>
      )}
    </>
  );
}
