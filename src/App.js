import * as React from "react";
import SKMTHL from "./assets/SKMTHL";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box sx={{ width: "80%", flexDirection: "vertical" }}>
      <Box sx={{ zIndex: 10, position: "absolute" }}>
        <img src={require("./assets/compass.jpg")} alt="compass" width="20%" />
      </Box>
      <SKMTHL />
    </Box>
  );
};

export default App;
