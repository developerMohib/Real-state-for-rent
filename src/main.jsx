
import ReactDOM from "react-dom/client";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Root/Root.jsx";
import Home from "./Component/Home/Home.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Advantage from "./Component/Advantage/Advantage.jsx";
import LogIn from "./Component/LogIn/LogIn.jsx";
import Register from "./Component/Register/Register.jsx";
import ResiDetails from "./Component/ResiDetails/ResiDetails.jsx";
import Provider from "./utilitis/Provider.jsx";
import Profile from "./Component/Profile/Profile.jsx";
import Private from "./Component/Private/Private.jsx";
import Update from "./Component/Update/Update.jsx";

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
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/advantage",
        element: <Advantage> </Advantage>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Private> <ResiDetails> </ResiDetails> </Private>,
        loader: async () => fetch(`/Residantial.json`),
      },
      {
        path: "/profile",
        element: <Private> <Profile> </Profile> </Private> ,
      },
      {
        path: "/update",
        element: <Private> <Update> </Update> </Private> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </>
);
