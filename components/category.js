import React, { useState } from "react";
import Slider from "react-slick";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, useTheme, Tabs, Tab, tabsClasses, Avatar, IconButton } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// const restaurants = [
//   // ... array of restaurant objects
// ];

const restaurants = [
  {
    key: "rice",
    label: "Rice",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "pounded-yam",
    label: "Pounded Yam",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "spaghetti",
    label: "Spaghetti",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "noodles",
    label: "Noodles",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "pizza",
    label: "Pizza",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "burger",
    label: "Burger",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "salad",
    label: "Salad",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "sandwich",
    label: "Sandwich",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "sushi",
    label: "Sushi",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "tacos",
    label: "Tacos",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "kebab",
    label: "Kebab",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "curry",
    label: "Curry",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "pancakes",
    label: "Pancakes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "waffles",
    label: "Waffles",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "fried-chicken",
    label: "Fried Chicken",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "steak",
    label: "Steak",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "soup",
    label: "Soup",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "sushi-roll",
    label: "Sushi Roll",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "fajitas",
    label: "Fajitas",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "native",
    label: "Native Corner",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "sandwich",
    label: "Sandwich",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "fries",
    label: "Fries",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "parfait",
    label: "Parfait",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "pinza",
    label: "Pizza",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "peppersoup",
    label: "Peppersoup",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "talad",
    label: "Salad",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "turkey",
    label: "Turkey",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "chinese",
    label: "Chinese",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "ewa-agoyin",
    label: "Ewa Agoyin",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "cup-cakes",
    label: "Cup Cakes",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "yoghurt",
    label: "Yoghurt",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "sea-food",
    label: "Seafood",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "smoothie",
    label: "Smoothie",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "small-chops",
    label: "Small Chops",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "abacha",
    label: "Abacha",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
];

const MultipleItems = () => {
    const [value, setValue] = useState(0);

  const handlePrevious = () => {
    setValue((prevValue) => Math.max(prevValue - 1, 0));
  };

  const handleNext = () => {
    setValue((prevValue) => prevValue + 1);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480, md: 960, lg: 1200, xl: "100%" },
        bgcolor: "background.paper",
        mt: 6,
      }}
    >
          {/* Scroll buttons */}
      <Box style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <Typography variant="h6">Categories</Typography>
        <Box style={{ display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle1" sx={{ mr: 2 }}>See all</Typography>
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
        // sx={{
        //   [`& .${tabsClasses.scrollButtons}`]: {
        //     "&.Mui-disabled": { opacity: 0.9 },
        //     borderRadius: "50%", // Make the background circular
        //     width: 40, // Set the width of the circular background
        //     height: 40, // Set the height of the circular background
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //     backgroundColor: "lightgray", // Set the background color of the circular background
        //   },
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        // }}
      >
        {restaurants.map((tag) => (
          <Box
            key={tag.key}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1, // Add gap between image and text
              padding: "4px", // Add padding for spacing inside the box
              mx: 1,
            }}
          >
            <Avatar alt={tag.label} src={tag.image} variant="rounded" sx={{ width: "440.56px", height: "165.2px" }} />
            <Box sx={{ pb: 2, minWidth: '440.56px', backgroundColor: "white", borderRadius: "4px", textAlign: "left" }}>
              <Typography variant="h6" component="div">
                {tag.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Grocery, Amala, Chicken
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                {/* <Rating name="read-only" value={4.5} precision={0.1} readOnly /> */}
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                  4.5 Ratings
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
