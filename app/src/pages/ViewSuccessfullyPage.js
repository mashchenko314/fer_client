import React from 'react';
import { styled } from '@mui/material/styles';
import {  Container } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import success from '../static/success.png'

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundImage: `url(${success})`,
    backgroundSize: "cover",
    backgroundPosition: 'bottom',
  },
}));
const ContentStyle = styled('div')(({ theme }) => ({
    minWidth: 1400,
    marginTop: 'auto',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(8, 0),
  }));


export default function ViewSuccessfullyPage() {
  return (
    <Page title="Просмотр">
      <RootStyle>
        <Container sx={{marginLeft: 10}} maxWidth="sm">
            <ContentStyle>
                
            </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
