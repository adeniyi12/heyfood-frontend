import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Avatar } from "@mui/material";

const bannerData = [
  {
    key: "001",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202653%20(4).png_1708685772787?alt=media&token=7552620d-58e4-4063-99a8-16671f2cc0ea",
  },
  {
    key: "002",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201572.png_1694610444037?alt=media&token=994f8820-a067-4355-bb41-7763bb51f238",
  },
  {
    key: "003",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%201593%20(3).png_1699953286131?alt=media&token=f6f6d37a-9eaa-4a01-937c-118a92284891",
  },
  {
    key: "004",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FFrame%202650.png_1707927808330?alt=media&token=b250ef8d-b5e9-418e-8dac-b89ae3e9ce29",
  },
  {
    key: "005",
    image:
      "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FEID%20in%20app.png_1712741683788?alt=media&token=7ec516df-d532-44f8-9b81-cee1891d7dd9",
  },
];

const Banner = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 520, md: 960, lg: 1200, xl: "100%" },
        bgcolor: "background.paper",
        mt: 6,
      }}
    >
      <Tabs
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.9 },
            borderRadius: "50%", // Make the background circular
            width: 40, // Set the width of the circular background
            height: 40, // Set the height of the circular background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgray", // Set the background color of the circular background
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {bannerData.map((tag) => (
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
            <Avatar alt={tag.label} src={tag.image} variant="rounded" sx={{ width: "489px", height: "210px" }} />
          </Box>
        ))}
      </Tabs>
    </Box>
  );
};

export default Banner;
