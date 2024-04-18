import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import { useGetTags } from "@/pages/api/food";

const Tags = ({ onTag }) => {
  const handleTagClick = (tagName) => {
    onTag(tagName);
  };

  const { isLoading, data: tagData, error } = useGetTags();

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching data.</div>;
  }

  return (
    <Box
      sx={{
        maxWidth: "100%",
        bgcolor: "background.paper",
        mx: 4,
        gap: 2,
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mt: 6,
      }}
    >
      <Tabs variant="scrollable" scrollButtons={false} aria-label="scrollable prevent tabs example">
        {tagData.map((tag) => (
          <Box
            key={tag._id}
            onClick={() => handleTagClick(tag.name)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              padding: "8px",
              mx: 2,
            }}
          >
            <Avatar alt={tag.label} src={tag.image} />
            <Typography variant="body2" align="center">
              {tag.name}
            </Typography>
          </Box>
        ))}
      </Tabs>
    </Box>
  );
};

export default Tags;
