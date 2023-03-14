import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import { loader as articleLoader } from './pages/Article';
import { loader as articlesLoader } from './pages/Articles';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/articles',
      element: <Articles />,
      loader: articlesLoader
    },
    {
      path: '/article/:articleId',
      element: <Article />,
      loader: articleLoader
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
