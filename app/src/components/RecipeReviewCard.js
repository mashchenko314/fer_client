import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Iconify from '../components/Iconify';
import { Stack } from '@mui/material';
import LinkPopover from './LinkPopover'

RecipeReviewCard.propTypes = {
  id:PropTypes.number.isRequired,
  brand: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  screensaver: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default function RecipeReviewCard({ id, name, brand, views, description, screensaver, url, ...other }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleAnalysisClick = (event) => {
    navigate('/dashboard/'+id, { replace: true });
  };
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idD = open ? 'simple-popover' : undefined;

  return (
    <Card sx={{borderRadius: '4px',  boxShadow: 0, border: '1.5px solid', borderColor: '#E7EDF3', maxWidth: 424 }}>
      <CardHeader
        action={
          <Stack 
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0.5}>
              <Typography variant="body2" color="text.secondary">{views}</Typography>
              <Iconify icon='eva:eye-fill' color="text.secondary" width={24} height={24} />
              <IconButton aria-describedby={idD} aria-label="share" onClick={handleClick} >
                <Iconify icon='eva:share-fill' width={24} height={24} />
              </IconButton>
              <LinkPopover anchorEl={anchorEl} handleClose={handleClose} url={url}/>
          </Stack>
          }
        title={name}
        subheader={brand}
          />
      <CardMedia
        sx={{mt: 1}}
        component="img"
        height="168"
        image={screensaver}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{pl: 2}} >ИЗМЕНИТЬ</Button>
        <Button onClick={handleAnalysisClick} >АНАЛИЗИРОВАТЬ</Button>
      </CardActions>
    </Card>
  );
}