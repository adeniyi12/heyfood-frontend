import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Avatar } from '@mui/material';
import { useGetRestaurants } from '@/pages/api/food';
import { Star } from '@mui/icons-material';

const Restaurant = ({restaurantData}) => {

    // const {isLoading, data: restaurantData, error} = useGetRestaurants();

    // if(isLoading){
    //     return <p>Loading...</p>
    // }

    // if(error){
    //     return <p>Error</p>
    // }
    // console.log(restaurantData)

  return (
    <>
    <Typography variant="h5" gutterBottom>All Restaurants</Typography> 
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'left' }}>   
        {restaurantData.map((restaurant) => (
          <Box
            key={restaurant._id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              // gap: 1, // Add gap between image and text
              // padding: "2px", // Add padding for spacing inside the box
              // mx: 1,
            }}
          >
            <Avatar alt={restaurant.name} src={restaurant.image} variant="rounded" sx={{ width: "440.56px", height: "165.2px" }} />
            <Box sx={{ pb: 2, minWidth: '440.56px', backgroundColor: "white", borderRadius: "4px", textAlign: "left" }}>
              <Typography variant="h6" component="div">
                {restaurant.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {restaurant.tags.join(", ")}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                {/* <Rating name="read-only" value={4.5} precision={0.1} readOnly /> */}
                <Typography variant="body2" color="text.secondary" sx={{ ml: 1, display: 'flex', alignItems: 'center' }}>
                  <Star sx={{ fontSize: 'inherit' }} />
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
}

export default Restaurant