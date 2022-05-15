import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Iconify from './Iconify';
import ResultLineChart from './ResultLineChart';

ResultAccordions.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function ResultAccordions({ data }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((v, index) => (
        <Accordion expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)}>
        <AccordionSummary
          expandIcon={<Iconify icon='eva:arrow-ios-downward-fill' color="text.secondary" width={24} height={24} />}
          aria-controls={"panelbh-content"+index}
          id={"panelbh-header"+index}
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {v.respondent}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Преобладающая эмоция: {v.top_emotion}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ResultLineChart
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartColors={[
                theme.palette.primary.main,
                '#C12183',
                '#531065',
                '#D62072',
                '#CE93D8',
                '#EB2F72',
                '#F48FB1',
              ]}
              chartData={[
                {
                  name: 'Злость',
                  type: 'line',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Отвращение',
                  type: 'line',
                  fill: 'solid',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Страх',
                  type: 'line',
                  fill: 'solid',
                  data: [40, 25, 36, 30, 45, 35, 64, 52, 59, 30, 39],
                },
                {
                  name: 'Счастье',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Печаль',
                  type: 'line',
                  fill: 'solid',
                  data: [12, 25, 36, 30, 42, 15, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Удивление',
                  type: 'line',
                  fill: 'solid',
                  data: [12, 25, 36, 30, 42, 15, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Нейтральность',
                  type: 'line',
                  fill: 'solid',
                  data: [12, 25, 36, 10, 42, 15, 64, 52, 59, 36, 39],
                },
              ]}
            />
          
        </AccordionDetails>
      </Accordion>
          ))}
    </div>
  );
}
