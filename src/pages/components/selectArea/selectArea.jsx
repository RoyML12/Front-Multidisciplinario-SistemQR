import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function MySelectComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedOption}
        label="Categoría"
        onChange={handleChange}
      >
        <MenuItem value="software">Software</MenuItem>
        <MenuItem value="marketing">Marketing</MenuItem>
        <MenuItem value="redes">Redes</MenuItem>
        <MenuItem value="mantenimiento">Mantenimiento</MenuItem>
      </Select>
    </FormControl>
  );
}

export default MySelectComponent;
