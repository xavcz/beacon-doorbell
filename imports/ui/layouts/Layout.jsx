import React from 'react';

import { Footer } from '../components/Footer.jsx';

const Layout = ({ content }) => {
  return (
    <div className="row">
      <div className="logo">
        <h1>🔔</h1>
      </div>
      { content }
      <Footer />
    </div>
  );
};

export default Layout;