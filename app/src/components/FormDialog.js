import * as React from 'react';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

FormDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
  };

export default function FormDialog({ open, setOpen}) {
  const [video, setVideo] = React.useState('Файл не выбран');
  const [img, setImg] = React.useState('Файл не выбран');

  const handleVideoSelect = (event) => {
    if (event.target.files.length!==0){
      setVideo(event.target.files[0].name)
    }
  }
  const handleImgSelect = (event) => {
    if (event.target.files.length!==0){
      setImg(event.target.files[0].name)
      console.log(event.target.files[0].name)
    }
  }
  const handleClose = () => {
    setOpen(false)
    setVideo('Файл не выбран')
    setImg('Файл не выбран')
  };

 
  return (
      <Dialog  open={open} onClose={handleClose}>
        <DialogTitle>Добавление рекламы</DialogTitle>
        <DialogContent>
        <Stack spacing={5}>
          <TextField
              sx={{ mt: 1, width: 384, height: 30}}
              size="medium"
              autoComplete="name"
              type="name"
              label="Название"
            />
          <TextField
              sx={{ mt: 5, width: 384, height: 30}}
              autoComplete="brand"
              type="brand"
              label="Бренд"
            />
          <TextField
              sx={{mt: 5, width: 384, height: 30}}
              autoComplete="description"
              type="description"
              label="Описание"
            />
          
        </Stack>
        <Stack
              sx={{mt: 5}}
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
                <input
                  type="file"
                  accept="video/*"
                  style={{ display: 'none' }}
                  id="outlined-button-file-video"
                  onChange={handleVideoSelect}
                  />

                <label htmlFor="outlined-button-file-video">
                  <Button variant="outlined" component="span">
                     ЗАГРУЗИТЬ РЕКЛАМУ
                  </Button>
                </label>
                <Typography sx={{pl: 1}}>{video}</Typography>
          </Stack>
          <Stack
              sx={{mt: 2}}
              direction="row"
              justifyContent="flex-start"
              alignItems="center">
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="outlined-button-file-img"
                  onChange={handleImgSelect}
                  />

                <label htmlFor="outlined-button-file-img">
                  <Button variant="outlined" component="span">
                     ЗАГРУЗИТЬ ЗАСТАВКУ
                  </Button>
                </label>
                <Typography sx={{pl: 1}}>{img}</Typography>
          </Stack>  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ОТМЕНИТЬ</Button>
          <Button  type="submit" variant="contained" onClick={handleClose}>ДОБАВИТЬ</Button>
        </DialogActions>
      </Dialog>
  );
}