import './App.css';
import  { Routes, Route, Link, Navigate} from "react-router-dom";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardMainPage from './pages/DashboardMainPage'
import NotFoundPage from './pages/NotFoundPage'
import { SupportPage} from './pages/SupportPage'
import { ResultPage} from './pages/ResultPage'
import ViewPage from './pages/ViewPage'
import ViewSuccessfullyPage from './pages/ViewSuccessfullyPage'
import DashboardLayout from './layouts/dashboard';
import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'
import ThemeProvider from './theme';


function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Navigate to='/dashboard' replace/>}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="register" element={<RegisterPage />}/>
            <Route path="watch/:url" element={<ViewPage />}/>
            <Route path="watch/success" element={<ViewSuccessfullyPage />}/>
            <Route path="404" element={<NotFoundPage />}/>
          </Route>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardMainPage />}/>
            <Route path=":id" element={<ResultPage />}/>
            <Route path="support" element={<SupportPage />}/>
          </Route>
          <Route path="*" element={<Navigate to='/404' replace/>}/>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;  
