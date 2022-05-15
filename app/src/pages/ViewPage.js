import React, {useEffect, useRef} from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'
// @mui
import { styled } from '@mui/material/styles';
import { Card, TextField, Container, Typography, Stack, Button } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// hooks
import useResponsive from '../hook/useResponsive';
// components
import Page from '../components/Page';
// sections
import view from '../static/view.png'
import screensaver from '../static/screensaver.png'
import Raiffeisen from '../video/Raiffeisen.mp4'

import { useReactMediaRecorder } from "react-media-recorder";



// ----------------------------------------------------------------------
const TypographyStyle = styled(Typography)(({ theme }) => ({
    background: "-webkit-linear-gradient(0deg, #E91E63 0%, #8E24AA 30%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
}));


const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundImage: `url(${view})`,
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

// ----------------------------------------------------------------------

export default function ViewPage() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');
  const [checked, setChecked] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [disabledStartButton, setStartDisabledButton] = React.useState(false);
  const [disabledeEndButton, setEndDisabledButton] = React.useState(true);
  const navigate = useNavigate();

  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true, audio: false });

  const webRef = useRef(null);
  const recordRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [webRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 400 } })
      .then(stream => {
        let video = webRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };


  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  

  const {url} = useParams();
  const vidRef = React.createRef()

  const handleStartView = () => {
    setDisabled(true)
    vidRef.current.play()
    startRecording()
    setStartDisabledButton(true)
  };
  const handleEnded = () => {
      stopRecording()
      setEndDisabledButton(false)
  };

  const handleEndView = () => {
    console.log(mediaBlobUrl)
    navigate('/watch/success', { replace: true });
};



  return (
    <Page title="Просмотр">
      <RootStyle>
        <Container sx={{marginLeft: 10}} maxWidth="sm">
          <ContentStyle>
            <TypographyStyle sx={{ mb: 3 }} variant="h3" gutterBottom>
              Просмотр рекламы
            </TypographyStyle>
            <Typography sx={{ color: 'text.secondary', mb: 2 }}>Перед началом просмотра введите свое имя и убедитесь, что вас хорошо видно. По окончании рекламы нажмите на кнопку "Завершить просмотр".</Typography>
            <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
            sx={{}}>
                <div style={{maxWidth: 400}}>
                    <TextField
                    sx={{ mb: 5, width: 400, height: 30}}
                    disabled={disabled}
                    autoComplete="respondent"
                    type="respondent"
                    label="Имя"/>
                    <video ref={webRef} />
                    <FormControlLabel disabled={disabled} sx={{ mt: 2}} control={<Checkbox checked={checked} onChange={handleChange} />} label="Даю согласие на осуществление записи и дальнейшую ее обработку" />
                    <Button disabled={disabledStartButton} sx={{ mt: 2, width: 400}} size="large" variant="contained" onClick={handleStartView}>НАЧАТЬ ПРОСМОТР</Button>
                    <Button disabled={disabledeEndButton} sx={{ mt: 2, width: 400}} size="large" variant="contained" onClick={handleEndView}>ЗАВЕРШИТЬ ПРОСМОТР</Button>
                </div>
                <video ref={vidRef} width="1000"  poster={screensaver} onEnded={handleEnded}>
                    <source src={Raiffeisen}/>
                    <p>Your browser doesn't support HTML5 video.</p>
                </video>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
