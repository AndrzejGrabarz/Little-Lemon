import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
// import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Menu from './Pages/Menu';
import OrderOnline from './Pages/OrderOnline';
import BookingPage from './Pages/BookingPage';
import Home from './Pages/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ConfirmedBooking from './components/ConfirmedBooking';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/order online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmbooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
