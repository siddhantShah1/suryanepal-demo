import * as React from "react";
import SKMTHL from "./assets/SKMTHL";
import { Box, Button, Modal } from "@mui/material";
import tableData from "./assets/SKMTHL.json";
import MapTable from "./components/MapTable";

const App = () => {
  const [selectedWD, setSelectedWD] = React.useState("");
  const [selectedData, setSelectedData] = React.useState();
  const [openModal, toggleModal] = React.useState(false);
  const checkData = (marketName) => {
    return tableData
      .map((object) => {
        if (object["MARKET NAME"] === marketName) {
          return object;
        }
      })
      .filter((y) => y !== undefined);
  };

  const handleJSONdata = (marketName) => {
    const chosenData = checkData(marketName);
    setSelectedWD(chosenData[0]["MARKET NAME"]);
    setSelectedData(chosenData[0]);
    toggleModal(true);
  };
  return (
    <>
      <SKMTHL {...{ handleJSONdata, selectedWD }} />
      <Modal
        open={openModal}
        onClose={() => toggleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MapTable {...{ selectedData, setSelectedWD }} />
      </Modal>
    </>
  );
};

export default App;

{
  /* <Box sx={{ zIndex: 10, position: "absolute" }}>
        <img src={require("./assets/compass.jpg")} alt="compass" width="20%" />
      </Box> */
}
