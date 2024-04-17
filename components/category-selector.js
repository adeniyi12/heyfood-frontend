import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CategorySelector = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "left", my: 2, gap: 2, mx: 2, mt: 4 }}>
      <Button variant="contained" startIcon={<RestaurantIcon />} sx={{ width: "200px", height: "60px", borderRadius: "30px", bgcolor: "black" }}>
        <Typography variant="button" noWrap sx={{ fontWeight: "bold" }}>
          Restaurants
        </Typography>
      </Button>
      <Button variant="text" color="inherit" startIcon={<ShoppingCartIcon />} sx={{ width: "200px", height: "60px", borderRadius: "30px" }}>
        <Typography variant="button" noWrap sx={{ fontWeight: "bold" }}>
          Grocery
        </Typography>
      </Button>
    </Box>
  );
};

export default CategorySelector;
