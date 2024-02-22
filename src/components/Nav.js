import { Link } from 'react-router-dom';

function Nav() {
  return (
    <header>
      <nav>
        <figure className="grid-item-brand">
          <img src="./images/Logo.svg" alt="logo" />
        </figure>
        <ul className="grid-item-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
