import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Link to="https://github.com/benjaminescobar1" target="_blank">
        GitHub
      </Link>
      <Link to="https://www.linkedin.com/in/benjamin-escobar-95804b78" target="_blank">
        LinkedIn
      </Link>
      <Link to="https://stackoverflow.com/users/22010801/benjamin-escobar" target="_blank">
        Stack Overflow
      </Link>
    </footer>
  );
}

export default Footer;