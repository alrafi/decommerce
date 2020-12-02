import React from 'react';
import './Footer.scss'

const Footer = () => {
  const getYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  return (
    <footer>
      <p className="copyright">© {getYear()} | Decommerce</p>
      <p className="made-by">Made with ❤️ by Hafis Alrafi</p>
    </footer>
  );
};

export default Footer;