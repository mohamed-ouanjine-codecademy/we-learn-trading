import React from 'react';
import {RouterProvider , createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// components
import Root from './components/Root';
import Welcome from './components/Welcome';
import Roadmap from './components/roadmap/Roadmap';
import Resources from './components/Resources';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<Welcome />} />
    <Route path='roadmap' element={<Roadmap />} />
    <Route path='resources' element={<Resources />} />
  </Route>
));

function App() {
  return (
    <RouterProvider  router={router} />
  );
}

export default App;