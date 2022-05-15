import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent } from '@mui/material';
import ResultAccordions from './ResultAccordions';


// ----------------------------------------------------------------------


ResultViews.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default function ResultViews({ title, subheader, data, ...other }) {

  return (
    <Card sx={{
      minWidth: 810,
      height: 752,
      borderRadius: '4px',
      boxShadow: 0, 
      border: '1.5px solid', 
      borderColor: '#E7EDF3', 
    }} {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent>
          <ResultAccordions data={data}/>

      </CardContent>
    </Card>
  );
}
