import React from "react";
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import { Contact } from "./pages/contact";
import { Movie } from "./pages/Movie";
import { ErrorPage } from "./pages/Error";
import { AppLayout } from "./layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAPIData } from "./api/GetAPIData";
import { MovieDetail } from "./pages/movieDetail";
import { movieData } from "./api/movieData";
import { contactData } from "./pages/contact";


const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/Contact",
            element: <Contact />,
            action: contactData,
          },
          {
            path: "/Movie",
            element: <Movie />,
            loader: getAPIData,
          },
          {
            path: "/Movie/:MovieID",
            element: <MovieDetail />,
            loader: movieData,
          }
        ]
      }
    ]
  );
  return <RouterProvider router={router} />;

}
export default App;



