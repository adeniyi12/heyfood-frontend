import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, Chip, Avatar, Stack, Typography } from '@mui/material';
import { useGetTags } from '@/pages/api/food';

const Tags = ({ onTag }) => {
  // const [value, setValue] = React.useState('');

  const handleTagClick = (tagName) => {
    onTag(tagName);
  };

  const {isLoading, data: tagData, error} = useGetTags();

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching data.</div>;
  }

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 960, lg: 1200, xl: '100%' }, bgcolor: 'background.paper', mx: 4, gap: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 6 }}>
      <Tabs
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        // sx={{ mx: 2, mt: 2, mb: 4 }}
      >
  {tagData.map((tag) => (
    <Box
      key={tag._id}
      onClick={() => handleTagClick(tag.name)}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1, // Add gap between image and text
        padding: '8px', // Add padding for spacing inside the box
        mx: 2,
      }}
    >
      <Avatar alt={tag.label} src={tag.image} /> {/* Adjust width and height of the image */}
      <Typography variant="body2" align="center">{tag.name}</Typography> {/* Align text center */}
    </Box>
  ))}
      </Tabs>
    </Box>
  );
}

export default Tags;