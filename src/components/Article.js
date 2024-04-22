import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/Article.css';

const Article = () => {
  return (
    <div className="container article" style={{ minHeight: '100vh' }}>
      <div className='row'>
        <div className='col'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Article;
