import * as Yup from 'yup';
import { useState } from 'react';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';


// ----------------------------------------------------------------------


export default function RegisterForm() {
  
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);


  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().min(2, 'Слишком короткое имя.').max(50, 'Too Long!').required('Это обязательное поле.'),
    last_name: Yup.string().min(2, 'Слишком короткая фамилия.').max(50, 'Too Long!').required('Это обязательное поле.'),
    email: Yup.string().email('Некорректный адрес.').required('Это обязательное поле.'),
    password: Yup.string().min(8, 'Минимум 8 символов.').required('Это обязательное поле.')
  });

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values ) => {
      values.username = values.email
      console.log(values)
      let response = await fetch(`http://127.0.0.1:8000/api/auth/users/`,
        {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(values)
        })
      let data = await response.json();
      if (response.status === 400) {
        if (data.password){
          errors.password = data.password[0]
        }
        if (data.username){
          errors.email = data.username[0]
        }

      }
      if (response.status === 201) {
        navigate('/login', { replace: true })
      }

    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;
  

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="Имя"
              {...getFieldProps('first_name')}
              error={Boolean(touched.first_name && errors.first_name)}
              helperText={touched.first_name && errors.first_name}
            />

            <TextField
              fullWidth
              label="Фамилия"
              {...getFieldProps('last_name')}
              error={Boolean(touched.last_name && errors.last_name)}
              helperText={touched.last_name && errors.last_name}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="email"
            type="email"
            label="Email"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Пароль"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={(touched.password && errors.password)}
          />

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
            ЗАРЕГИСТРИРОВАТЬСЯ
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
