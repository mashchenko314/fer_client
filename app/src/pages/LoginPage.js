import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'
import { withStyles } from '@mui/material/styles';

import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
// hooks
import useResponsive from '../hook/useResponsive';
// components
import Page from '../components/Page';
// sections
import LoginForm from '../sections/auth/login/LoginForm';
import AuthSocial from '../sections/auth/AuthSocial';
import login from '../static/login.png'


// ----------------------------------------------------------------------
const TypographyStyle = styled(Typography)(({ theme }) => ({
    background: "-webkit-linear-gradient(0deg, #E91E63 0%, #8E24AA 15%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
}));


const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    backgroundImage: `url(${login})`,
    backgroundSize: "cover",
    backgroundPosition: 'bottom',
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  marginTop: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, {replace: true}));
    }


  return (
    <Page title="Вход">
      <RootStyle>

        <Container sx={{marginLeft: 10}} maxWidth="sm">
          <ContentStyle>
            <TypographyStyle sx={{ mb: 3 }} variant="h3" gutterBottom>
              Вход
            </TypographyStyle>

            <Typography sx={{ color: 'text.secondary', mb: 2 }}>Введите свои данные.</Typography>


            <LoginForm />

            <AuthSocial />
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Еще нет аккаунта?
                <Link variant="subtitle2" component={RouterLink} to="/register">
                  Зарегистрироваться
                </Link>
              </Typography>

            
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
