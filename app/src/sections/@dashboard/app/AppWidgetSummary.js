// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------
const CardStyle = styled(Card)(({ theme }) => ({
  ":hover": {
    background: "-webkit-linear-gradient(0deg, #E91E63 0%, #8E24AA 100%)",
    color: theme.palette['primary'].contrastText,
  },
  color: theme.palette['text'].secondary,
  
}));
const IconifyStyle = styled(Iconify)(({ theme }) => ({
  ":hover": {
    color: theme.palette['primary'].contrastText,
  },
}));

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <CardStyle
      sx={{
        py: 3,
        borderRadius: '4px',
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
    
        <IconifyStyle icon={icon} width={48} height={48} />
     
      <Typography variant="h3">{fShortenNumber(total)}</Typography>

      <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
        {title}
      </Typography>
    </CardStyle>
  );
}
