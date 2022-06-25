import "./App.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Rules } from "./pages/Rules";
import Concepts from "./pages/Concepts";

function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/szabalyok" element={<Rules />} />
        <Route path="/fogalmak" element={<Concepts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
