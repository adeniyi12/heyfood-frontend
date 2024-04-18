import { useState } from "react";
import { Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { useGetRestaurants } from "@/pages/api/food";

const SortComponent = ({ onSort }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onSort(event.target.value);
  };

  const { data } = useGetRestaurants();

  return (
    <FormControl component="fieldset" sx={{ mt: 8, mx: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
        All Stores
      </Typography>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        {" "}
        ({data?.length} stores){" "}
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Sort
      </Typography>
      <RadioGroup aria-label="store-sort" name="store-sort" value={value} onChange={handleChange}>
        <FormControlLabel value="mostPopular" control={<Radio />} label="Most Popular" />
        <FormControlLabel value="nearest" control={<Radio />} label="Nearest" />
        <FormControlLabel value="highestRated" control={<Radio />} label="Highest rated" />
        <FormControlLabel value="newest" control={<Radio />} label="Newest" />
        <FormControlLabel value="mostRated" control={<Radio />} label="Most Rated" />
      </RadioGroup>
    </FormControl>
  );
};

export default SortComponent;
