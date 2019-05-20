// Do not delete this file as this will serve as the top parent component
// of all components
// If you want to change or remove this, update the router.js file in regard
// to those changes

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import React from "react";
import "./common/styles.scss";

const Layout = ({ children }) => <div>{children}</div>;

export default Layout;
