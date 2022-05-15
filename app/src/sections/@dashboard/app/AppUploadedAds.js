import PropTypes from 'prop-types';
import { useState } from "react";
// @mui
import { Card, CardHeader, Button, Grid, Stack, Box, Pagination  } from '@mui/material';
// component
import RecipeReviewCard from '../../../components/RecipeReviewCard';
import FormDialog from '../../../components/FormDialog';

import usePagination from "../../../hook/usePagination";
import { default as data } from "../../../_mock/ads.json";
import screensaver from '../../../static/screensaver.png'
// ----------------------------------------------------------------------

AppUploadedAds.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export default function AppUploadedAds({ title, subheader, ...other }) {
  let [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const PER_PAGE = 6;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Card 
      sx={{
        borderRadius: '4px',
        pr: 3
      }}
     {...other}>
        <Stack 
        direction="row"
        justifyContent="space-between"
        alignItems="baseline">
          <CardHeader title={title} subheader={subheader} />
          <Button variant='contained' onClick={handleClickOpen}>ДОБАВИТЬ РЕКЛАМУ</Button>
        </Stack>
        <FormDialog open={open} setOpen={setOpen}  />
        <Box sx={{ p: 3, pb: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {_DATA.currentData().map((v, index) => (
            <Grid item xs={2} sm={4} md={4} key={v.id}>
              <RecipeReviewCard id={v.id} name={v.name} brand={v.brand} views={v.views} description={v.description} screensaver={screensaver} url={v.url} />
            </Grid>
          ))}
          </Grid>
         
          <Pagination 
            sx={{ pl: '45%', pt: 1 }} 
            size="small"  
            count={count}
            page={page}
            onChange={handleChange} 
          />

        </Box>
    </Card>
  );
}
