import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Informaiton from './components/Informaiton';
import Card from './components/Card';
import Images from './components/Images';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Card
        name="Islamabad"
        capital="Islamabad is the capital city of the Islamic Republic of Pakistan"
        oldName="Rawalpindi"
        population="1.2m"
        infoBtton="More Info"
        images="Images"
      />
    ),
  },
  {
    path: '/information',
    element: <Informaiton />,
  },
  {
    path: '/back',
    element: (
      <Card
        name="Islamabad"
        capital="Islamabad is the capital city of the Islamic Republic of Pakistan"
        oldName="Rawalpindi"
        population="1.2m"
        infoBtton="More Info"
        images="Images"
      />
    ),
  },
  {
    path: '/images',
    element: <Images />,
  },
  {
    path: '/back-to-home',
    element: (
      <Card
        name="Islamabad"
        capital="Islamabad is the capital city of the Islamic Republic of Pakistan"
        oldName="Rawalpindi"
        population="1.2m"
        infoBtton="More Info"
        images="Images"
      />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
