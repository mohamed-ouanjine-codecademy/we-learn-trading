import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from './components/Root';
import Welcome from './components/Welcome';
import RoadMap from './components/road-map/RoadMap'
import Resources from './components/Resources';
import Article from './components/Article';
import NavigatingExchangeRate from './components/articles/NavigatingExchangeRate';
import ArticlesList from './components/ArticlesList';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route index element={<Welcome />} />
    <Route path='road-map' element={<RoadMap />} />
    <Route path='resources' element={<Resources />} />
    <Route path='articles' element={<Article />} >
      <Route index element={<ArticlesList />} />
      <Route path='navigating-exchange-rate' element={<NavigatingExchangeRate />} />
    </Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;