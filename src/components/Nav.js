import React from 'react';

function Nav() {
  return (
    <nav>
      <figure className="grid-item-brand">
        <img src="./images/Logo.svg" alt="logo" />
      </figure>
      <ul className="grid-item-menu">
        <li><a href="/HOME">Home</a></li>
        <li><a href="/ABOUT">About</a></li>
        <li><a href="/MENU">Menu</a></li>
        <li><a href="/RESERVATIONS">Reservations</a></li>
        <li><a href="/ORDER online">Order Online</a></li>
        <li><a href="/LOGIN">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
