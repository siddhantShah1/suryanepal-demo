import * as React from "react";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { BhaktapurData } from "./data";
import MapTable from "./components/MapTable";
import { SKMTHL, PRESKU, BTHBKT } from "./svg";

const App = () => {
  const [selectedWD, setSelectedWD] = React.useState("");
  const [selectedData, setSelectedData] = React.useState();
  const [openModal, toggleModal] = React.useState(false);
  const [dropMaps, setDropMaps] = React.useState("SKMTHL");

  const checkData = (marketName) => {
    return BhaktapurData.map((object) => {
      if (object["MARKET NAME"] === marketName) {
        return object;
      }
    }).filter((y) => y !== undefined);
  };

  const handleJSONdata = (marketName) => {
    const chosenData = checkData(marketName);
    console.log(chosenData);
    setSelectedWD(chosenData[0]["MARKET NAME"]);
    setSelectedData(chosenData[0]);
    toggleModal(true);
  };

  const handleChange = (event) => {
    setDropMaps(event.target.value);
    setSelectedWD("");
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <div style={{ flex: 0.9 }}>
          {dropMaps === "SKMTHL" ? (
            <SKMTHL {...{ handleJSONdata, selectedWD }} />
          ) : dropMaps === "PRESKU" ? (
            <PRESKU {...{ handleJSONdata, selectedWD }} />
          ) : (
            <BTHBKT />
          )}
        </div>
        <div style={{ flex: 0.1 }}>
          <InputLabel id="demo-simple-select-label">Choose your Map</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dropMaps}
            label="Maps"
            color="primary"
            onChange={handleChange}
            fullWidth={true}
          >
            <MenuItem value={"SKMTHL"}>SKMTHL</MenuItem>
            <MenuItem value={"PRESKU"}>PRESKU</MenuItem>
            <MenuItem value={"BTHBKT"}>BTHBKT</MenuItem>
          </Select>
        </div>
      </div>
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
