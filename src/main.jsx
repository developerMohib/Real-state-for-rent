import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './ErrorPage/ErrorPage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root.jsx';
import Home from './Component/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <ErrorPage> </ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Home></Home>,
      },
      {
        path: "/advantage",
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
