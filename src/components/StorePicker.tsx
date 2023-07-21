import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const StorePicker = () => {
  const numbersList = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
    {
      value: 4,
      label: "4",
    },
    {
      value: 5,
      label: "5",
    },
  ];
  const [storeNumber, setStoreNumber] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setStoreNumber(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 75 }} size="small">
        <InputLabel
          id="demo-simple-select-helper-label"
          style={{ color: "whitesmoke" }}
        >
          Store
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={storeNumber}
          label="Store"
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>1</em>
          </MenuItem> */}

          {numbersList.map((x) => {
            return <MenuItem value={x.value}>{x.label}</MenuItem>;
          })}

          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
    </div>
  );
};

export default StorePicker;
