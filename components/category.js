import React, { useState } from "react";
import { Typography, Box, Tabs, Avatar, IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSearchRestaurants } from "@/pages/api/food";
import { Star } from "@mui/icons-material";

const MultipleItems = () => {
  const [value, setValue] = useState(0);

  const handlePrevious = () => {
    setValue((prevValue) => Math.max(prevValue - 3, 0));
  };

  const handleNext = () => {
    setValue((prevValue) => prevValue + 2);
  };

  const { data: restaurants } = useSearchRestaurants("Grocery");

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100%",
        bgcolor: "background.paper",
        mt: 6,
      }}
    >
      {/* Scroll buttons */}
      <Box style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Grocery
        </Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="subtitle2" sx={{ mr: 2 }}>
            See all
          </Typography>
          <IconButton aria-label="previous" onClick={handlePrevious}>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton aria-label="next" onClick={handleNext}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      </Box>
      <Tabs
        variant="scrollable"
        scrollButtons={false}
        aria-label="visible arrows tabs example"
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      >
        {restaurants?.map((restaurant) => (
          <Box
            key={restaurant._id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              padding: "4px",
              mx: 1,
            }}
          >
            <Avatar alt={restaurant.name} src={restaurant.image} variant="rounded" sx={{ width: { xs: "100%", md: "440.56px" }, height: "165.2px" }} />
            <Box sx={{ pb: 2, minWidth: "440.56px", backgroundColor: "white", borderRadius: "4px", textAlign: "left" }}>
              <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                {restaurant.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.tags.join(", ")}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1, display: "flex", alignItems: "center" }}>
                  <Star sx={{ fontSize: "inherit" }} />
                  {restaurant.rate}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  {restaurant.ratings}+ Ratings
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Tabs>
    </Box>
  );
};

export default MultipleItems;
