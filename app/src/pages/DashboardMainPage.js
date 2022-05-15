// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
  AppUploadedAds,
  AppWidgetSummary,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardMainPage() {
  const theme = useTheme();

  return (
    <Page title="Главная">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Рекламы загружено" total={32} icon={'eva:checkmark-square-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Рекламы проанализировано" total={2} icon={'eva:trending-up-fill'} />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppUploadedAds
              title="Мои рекламы"
            />
          </Grid>

        </Grid>
        
      </Container>
    </Page>
  );
}
