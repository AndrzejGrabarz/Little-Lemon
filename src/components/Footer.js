import React from 'react';

function Footer() {
  return (
    <footer>
      <img className="footer-image" src="./images/Profil.png" alt="" />
      <div className="footer-nav footer-nav-1">
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resrvation">Reservation</a></li>
          <li><a href="/order online">Order Online</a></li>
          <li><a href="/Login">Login</a></li>
        </ul>
      </div>
      <div className="footer-nav footer-nav-2">
        <h4>Contact</h4>
        <ul>
          <li><a href="/Adress">Adress</a></li>
          <li><a href="/phone number">phone number</a></li>
          <li><a href="/email">email</a></li>
        </ul>
      </div>
      <div className="footer-nav footer-nav-3">
        <h4>Social Media Links</h4>
        <ul>
          <li><a href="/Adress">Adress</a></li>
          <li><a href="/phone number">phone number</a></li>
          <li><a href="/email">email</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
