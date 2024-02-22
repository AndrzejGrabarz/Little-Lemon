import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import OrderOnline from './Pages/OrderOnline';
import Reservations from './Pages/Reservations';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
