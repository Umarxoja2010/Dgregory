import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/' || location.pathname === '/register';

  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
