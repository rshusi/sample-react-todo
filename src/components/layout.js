// Do not delete this file as this will serve as the top parent component
// of all components
// If you want to change or remove this, update the router.js file in regard
// to those changes

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './common/styles.css';

import React from 'react';

const Layout = ({ children }) => (
  <div>
    { children }
  </div>
);

export default Layout;
