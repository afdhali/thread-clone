import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import { BsThreeDots } from "react-icons/bs";
// import Actions from "./Actions";
import { DeleteIcon } from "@chakra-ui/icons";
import useShowToast from "../hooks/useShowToast";
import { useNavigate } from "react-router-dom";

export default function Comment({ reply, user, currentPost }) {
  const showToast = useShowToast();
  const navigate = useNavigate();

  const handleDeleteReply = async (e) => {
    // console.log(currentPost?._id);
    try {
      e.preventDefault();
      const res = await fetch(
        `/api/posts/reply/delete/${currentPost._id}/${reply._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      showToast("Success", "Reply Deleted", "success");
      navigate(`/${user.username}`);
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  if (!user) return null;

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={reply.userProfilePic} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {reply.username}
            </Text>
          </Flex>
          <Text>{reply.text}</Text>
        </Flex>
        {reply?.username === user.username && (
          <DeleteIcon onClick={handleDeleteReply} />
        )}
      </Flex>
      {/* {console.log(reply._id)} */}
      {reply._id === currentPost.replies[currentPost.replies.length - 1]._id ? (
        ""
      ) : (
        <Divider my={4} />
      )}
    </>
  );
}
