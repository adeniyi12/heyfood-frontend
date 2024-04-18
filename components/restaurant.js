import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box, Avatar, Button } from "@mui/material";
import { Star } from "@mui/icons-material";

const Restaurant = ({ restaurantData, showResetButton, handleReset }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold", mt: 4, mb: 4, mr: 4 }}>
          All Restaurants
        </Typography>
        {showResetButton && (
          <Button variant="text" sx={{ fontWeight: "bold", color: "red" }} onClick={handleReset}>
            Reset
          </Button>
        )}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "left" }}>
        {restaurantData.map((restaurant) => (
          <Box
            key={restaurant._id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar alt={restaurant.name} src={restaurant.image} variant="rounded" sx={{ width: { xs: "100%", md: "440.56px"}, height: "165.2px" }} />
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
      </Box>
    </>
  );
};

export default Restaurant;
