import React from 'react';
import  { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import {  Container, Button } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import notfound from '../static/notfound.png'

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundImage: `url(${notfound})`,
    backgroundSize: "cover",
    backgroundPosition: 'bottom',
  },
}));
const ContentStyle = styled('div')(({ theme }) => ({
    minWidth: 1400,
    marginTop: 'auto',
    minHeight: '100vh',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(8, 0),
  }));


export default function ViewSuccessfullyPage() {

    const navigate = useNavigate();
    const handleClick = (event) => {
        navigate('/dashboard')
    };

  return (
    <Page title="404">
      <RootStyle>
        <Container sx={{marginLeft: 10}} maxWidth="sm">
            <ContentStyle>
                <Button sx={{ml: 8, mt: 66, maxHeight: 30}} size="large" onClick={handleClick}> НА ГЛАВНУЮ</Button>
                
            </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
