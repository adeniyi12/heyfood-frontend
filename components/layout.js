// import React from 'react'

// const Layout = () => {
//   return (
//     <div>layout</div>
//   )
// }

// export default Layout

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SortComponent from './sort';
import MultipleItems from './category';
import Restaurant from './restaurant';
import { useGetRestaurants, useSearchRestaurants, useSortRestaurants } from '@/pages/api/food';
import Header from './header';
import CategorySelector from './category-selector';
import Tags from './tags';
import Banner from './banner';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Layout = () => {
  
  const [restaurants, setRestaurants] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [toggle, setToggle] = React.useState(true);
  const [display, setDisplay] = React.useState(false);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setDisplay(true);
    setToggle(false);
  }

  const handleSort = (value) => {
    setSort(value);
    setDisplay(true);
    setToggle(false);
  }

  const {isLoading: loadingAll, data: allRestaurants, error: errorAll} = useGetRestaurants();
  const {isLoading: loadingSearch, data: searchResults, error: errorSearch} = useSearchRestaurants(searchQuery);
  const {isLoading: loadingSort, data: sortedResults, error: errorSort} = useSortRestaurants(sort);


  React.useEffect(() => {
    if (searchQuery) {
      if (!loadingSearch && searchResults) {
        setRestaurants(searchResults);
      }
    } else if (sort) {
      if (!loadingSort && sortedResults) {
        setRestaurants(sortedResults);
      } 
    } else {if (!loadingAll && allRestaurants) {
      setRestaurants(allRestaurants);
    }}
  }, [searchQuery, sort, loadingAll, loadingSearch, loadingSort, allRestaurants, searchResults, sortedResults]);

  // if(isLoading){
  //   return <p>Loading...</p>
  // }
  if (loadingAll || loadingSearch || loadingSort) {
    return <div>Loading...</div>;
  }

  if (errorAll || errorSearch || errorSort) {
    return <div>Error fetching data.</div>;
  }

  return (
    <>
    <Header onSearch={handleSearch} />
    <CategorySelector />
    {!sort && <Tags onTag={handleSearch} /> }
    {toggle && <Banner /> }
    {toggle && !sort && <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <SortComponent onSort={handleSort} />
        </Grid>
        <Grid item xs={12} sm={9} sx={{ mb: 4 }}>
          <MultipleItems />
          {restaurants && <Restaurant restaurantData={restaurants} /> }
        </Grid>
      </Grid>
    </Box> }
    {!toggle && sort && <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
          <SortComponent onSort={handleSort} />
        </Grid>
        <Grid item xs={12} sm={9} sx={{ mb: 4 }}>
          {/* <MultipleItems /> */}
          {restaurants && <Restaurant restaurantData={restaurants} /> }
        </Grid>
      </Grid>
    </Box> }
    {!toggle && !sort && <Restaurant restaurantData={restaurants} /> }
    </>
  );
}

export default Layout