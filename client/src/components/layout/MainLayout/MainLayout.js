import React from 'react'

import MainMenu from './../MainMenu/MainMenu';
import Footer from './../Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <MainMenu />
    {children}
    <Footer />
  </div>
);

export default MainLayout;
