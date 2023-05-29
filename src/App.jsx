import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer'
import AppRoutes from './routes/AppRoutes'
import LoginPage from './pages/LoginPage/LoginPage';
import { useLocation } from 'react-router-dom';

function App() {

  const { pathname } = useLocation()
  const isLoginPage = pathname === '/'


  return (

    isLoginPage ? <LoginPage /> :

      <div className="App">
        <Navigation />
        <AppRoutes />
        <Footer />
      </div>
  );
}

export default App

