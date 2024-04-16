import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  // using useCallback to avoid infinite loop render on useEffect at UserPage while using useShowToast hook
  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title: title,
        description: description,
        status: status,
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
