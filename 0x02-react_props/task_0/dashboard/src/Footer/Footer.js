import React from 'react';
import { getFullYear, getFooterCopy } from "../utils/utils";
import './Footer.css';

function Footer() {
  return (
    <div className='App-footer'>
      <p>{getFooterCopy(true)}</p>
      <p>{getFullYear()}</p>
    </div>
  );
}

export default Footer;
