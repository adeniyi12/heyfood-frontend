import React from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Avatar, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Header = ({ onSearch }) => {
  const [searchInput, setSearchInput] = React.useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchInput);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <Box mx={2}>
      <Toolbar>
        {/* Hamburger menu icon */}
        <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: { sm: 3, md: 4 } }}>
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Avatar src="https://heyfood.africa/icons/new/logo-circle-green.svg" alt="HeyFood Logo" sx={{ mr: { sm: 3, md: 5 } }} />

        {/* Location setter */}
        <IconButton edge="start" color="inherit" aria-label="set location" sx={{ mr: { md: 10, lg: 30 } }}>
          <LocationOnIcon />
          <Typography variant="body2" noWrap sx={{ fontWeight: "bold" }}>
            Set Location
          </Typography>
        </IconButton>

        {/* Search input field */}
        <div style={{ flexGrow: 1 }} sx={{ display: { xs: "none", md: "flex" } }}>
          <div
            style={{
              position: "relative",
              marginLeft: "24px",
              width: "50%",
              borderRadius: "25px",
              backgroundColor: "#eeeeee",
              height: "50px",
              display: { xs: "none", md: "flex" },
            }}
          >
            <SearchIcon
              fontSize="small"
              style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}
            />
            <InputBase
              placeholder="Search restaurants or food"
              style={{ marginLeft: "40px", display: "flex", alignContent: "center", padding: "10px" }}
              value={searchInput}
              onChange={handleSearchInput}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>

        {/* Sign-in icon */}
        <Button variant="text" color="inherit" sx={{ mr: 2, fontWeight: "bold", display: { xs: "none", md: "flex" } }}>
          SIGN IN
        </Button>

        {/* Cart icon with badge */}
        <Button
          variant="contained"
          sx={{ mr: 4, color: "white", borderColor: "black", borderRadius: "20px", bgcolor: "black", padding: "5px 25px", height: "40px" }}
        >
          <Badge badgeContent={0} color="secondary" sx={{ mr: 1 }}>
            <ShoppingCartIcon />
          </Badge>
          <Typography variant="body2" noWrap sx={{ fontWeight: "bold" }}>
            CART - 0
          </Typography>
        </Button>
      </Toolbar>
    </Box>
  );
};

export default Header;
