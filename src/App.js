import React from 'react';
import { BrowserRouter as Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';
import BookingPage from './components/BookingPage';


function App() {
  const router = createBrowserRouter([
    
    {
      path: '/',
      element: <ShowList></ShowList>
    },
    {
      path: '/show/:id',
      element: <ShowDetail></ShowDetail>
    },
    {
      path: 'book-ticket/:id',
      element: <BookingPage></BookingPage>
    }
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
