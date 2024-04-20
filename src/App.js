import React from 'react';
import {RouterProvider , createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/Root';
import Welcome from './components/Welcome';
import RoadMap from './components/road-map/RoadMap'
import Resources from './components/Resources';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<Welcome />} />
    <Route path='road-map' element={<RoadMap />} />
    <Route path='resources' element={<Resources />} />
  </Route>
));

function App() {
  return (
    <RouterProvider  router={router} />
  );
}

export default App;