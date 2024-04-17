import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

export default function HomePage() {
  const user = useRecoilValue(userAtom);

  return (
    <Link to={`/${user.username}`}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"}>Visit Profile Page</Button>
      </Flex>
    </Link>
  );
}
