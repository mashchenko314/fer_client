// @mui
import PropTypes from 'prop-types';
import { Card, Typography, Stack } from '@mui/material';
// utils
import { fShortenNumber } from '../utils/formatNumber';

// ----------------------------------------------------------------------


ResultWidgetSummary.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

export default function ResultWidgetSummary({ title, total, size,...other }) {
  return (
    <Card
      sx={{
        textAlign: 'center',
        borderRadius: '4px',
        boxShadow: 0, 
        border: '1.5px solid', 
        borderColor: '#E7EDF3', 
        width: 210,
        height: 90,
        mr: 1,
        mb: 1
      }}
    >
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant={size}>{total}</Typography>
    </Card>
  );
}
