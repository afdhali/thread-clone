import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { PostPage } from "./pages/PostPage";
import { UserPage } from "./pages/UserPage";

function App() {
  return (
    <Container maxW="620px">
      <Routes>
        <Route path="/:username" element={UserPage} />
      </Routes>
    </Container>
  );
}

export default App;
