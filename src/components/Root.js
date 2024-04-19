import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Root = () => {
  return (
    <>
      <Header />
      <div className='p-3'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;