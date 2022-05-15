import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
    ResultAnalysedAd,
    
} from '../sections/@dashboard/result';
import { default as data } from "../_mock/ads.json";

import Iconify from '../components/Iconify';


const ResultPage = () => {
    const navigate = useNavigate();
    const handleBackClick = (event) => {
    navigate('/dashboard', { replace: true });
    };
    const {id} = useParams();
    const ad = data[id]
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <Page title="Главная">
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
          <Button onClick={handleBackClick} startIcon={<Iconify icon='eva:arrow-back-fill' color="primary" width={24} height={24} />}>НАЗАД</Button>
            <ResultAnalysedAd
              ad={ad}
            />
          </Grid>

        </Grid>
        
      </Container>
    </Page>
    )
}

export {ResultPage}