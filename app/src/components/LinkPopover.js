import * as React from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import Iconify from '../components/Iconify';

LinkPopover.propTypes = {
    url: PropTypes.string.isRequired,
    anchorEl: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired
  };
  

export default function LinkPopover( {url, anchorEl, handleClose} ) {

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleCopyClick = (event) => {
    navigator.clipboard.writeText(url)}

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
      setChecked(event.target.checked);
  };
  
  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <Typography variant="subtitle1" sx={{ p: 2 }}>Скопируйте ссылку на просмотр рекламы</Typography>
         <Stack 
         direction="row"
         alignItems="center"
         spacing={0.5}>
            <TextField sx={{ pl: 2 }}
            hiddenLabel
            id="filled-hidden-label-small"
            defaultValue={url}
            variant="filled"
            size="small"
            disabled
            />
            <IconButton aria-label="copy" onClick={handleCopyClick}>
                <Iconify icon='material-symbols:content-copy' width={32} height={32} />
            </IconButton>
        </Stack>
        <Stack 
        direction="row"
        alignItems="center"
        spacing={0.5}>
            <Typography variant="body1" sx={{ pl: 2 }}>Открыть доступ по ссылке</Typography>
            <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            />
        </Stack>
        <Typography variant="body1"  sx={{ pl: 2, pr: 2, pb:2  }}>Просмотр будет доступен всем, у кого есть ссылка.</Typography>
      </Popover>
    </div>
  );
}