import PropTypes from 'prop-types';
import { useState } from "react";
// @mui
import { Card, CardHeader, Button, Grid, Stack, Box, Pagination  } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// component
import ResultWidgetSummary from '../../../components/ResultWidgetSummary';
import ResultEmotions from '../../../components/ResultEmotions';
import ResultViews from '../../../components/ResultViews';
import { default as data } from "../../../_mock/chart.json";

// ----------------------------------------------------------------------

ResultAnalysedAd.propTypes = {
  ad: PropTypes.object.isRequired,
};

export default function ResultAnalysedAd({ ad, ...other }) {
  const theme = useTheme();
  
  return (
    <Card 
      sx={{
        borderRadius: '4px',
        pr: 3
      }}
     {...other}>
        <CardHeader title={ad.name+' - '+ad.brand} subheader={ad.description} />
        <Box sx={{ p: 3, pb: 3 }} >
        <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{}}>
          <Stack minWidth={440}>
              <Grid sx={{ pl: 3, pt: 3, pb: 2 }} container  rowSpacing={3} columnSpacing={{ xs: 1, sm: 3, md: 3 }} spacing={2} >
                <ResultWidgetSummary item xs={6} title='Просмотров' total={20} size='h4'></ResultWidgetSummary>
                <ResultWidgetSummary item xs={6} title='Вовлеченность' total={80+'%'} size='h4'></ResultWidgetSummary>
                <ResultWidgetSummary item xs={6} title='Преобладающая эмоция' total={'Нейтральность'} size='h6'></ResultWidgetSummary>
                <ResultWidgetSummary item xs={6} title='Эмоциональный оттенок' total={'Позитивный'} size='h6'></ResultWidgetSummary>
              </Grid>
              <ResultEmotions
                  title="Соотношение эмоций"
                  chartData={[
                    { label: 'Злость', value: 4344 },
                    { label: 'Отвращение', value: 5435 },
                    { label: 'Страх', value: 1443 },
                    { label: 'Счастье', value: 4443 },
                    { label: 'Печаль', value: 4443 },
                    { label: 'Удивление', value: 4443 },
                    { label: 'Нейтральность', value: 4443 },
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
              />
          </Stack>
          <ResultViews data={data} title="Результаты просмотров"/>
        </Stack>
        </Box>       
    </Card>
  );
}
