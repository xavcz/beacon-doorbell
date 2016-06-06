import React from 'react';

const Layout = ({ content }) => {
  return (
    <div className="container">
      <div className="logo">
        🔔
      </div>
      { content }
    </div>
  );
};

export default Layout;